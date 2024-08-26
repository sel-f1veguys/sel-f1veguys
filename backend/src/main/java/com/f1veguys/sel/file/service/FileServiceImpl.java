package com.f1veguys.sel.file.service;

import com.f1veguys.sel.file.domain.File;
import com.f1veguys.sel.file.dto.FileResponse;
import com.f1veguys.sel.file.repository.FileRepository;
import com.f1veguys.sel.global.error.exception.FileNotFoundException;
import com.f1veguys.sel.global.error.exception.UnsupportedFormatException;
import com.f1veguys.sel.global.util.FileUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import static com.f1veguys.sel.global.util.FileUtil.getFileExt;

@Service
@RequiredArgsConstructor
@Transactional
public class FileServiceImpl implements FileService {

    @Value("${file.upload-dir}")
    private String uploadDir;

    private final FileRepository fileRepository;

    @Transactional
    public FileResponse saveFile(MultipartFile file) throws IOException {
        String originalFileName = file.getOriginalFilename();
        String storedFileName = UUID.randomUUID() + "." + originalFileName;

        if (!FileUtil.isImageFile(originalFileName)) {
            throw new UnsupportedFormatException();
        }

        Path savePath = Paths.get(uploadDir, storedFileName); // java.nio.file.Path 사용
        Files.createDirectories(savePath.getParent()); // 디렉토리가 없으면 생성
        file.transferTo(savePath); // 파일 저장

        String ext = getFileExt(originalFileName);
        File fileEntity = File.builder()
                .type("image/" + ext)
                .name(originalFileName)
                .path(storedFileName)
                .build();
        fileRepository.save(fileEntity);

        return new FileResponse(fileEntity);
    }

    @Transactional
    public void deleteFile(int fileId) {  // fileId의 타입을 Long으로 변경
        File fileEntity = fileRepository.findById(fileId)
                .orElseThrow(FileNotFoundException::new);
        Path filePath = Paths.get(uploadDir, fileEntity.getPath());
        try {
            Files.deleteIfExists(filePath);  // 파일 삭제 시도
        } catch (IOException e) {
            //
        }
        fileRepository.deleteById(fileId);  // 데이터베이스에서 파일 엔터티 삭제
    }

    @Transactional
    public FileResponse updateFile(int fileId, MultipartFile file) throws Exception {
        File oldFileEntity = fileRepository.findById(fileId)
                .orElseThrow(FileNotFoundException::new);
        Path oldFilePath = Paths.get(uploadDir, oldFileEntity.getPath());
        Files.deleteIfExists(oldFilePath); // 기존 파일 삭제

        String originalFileName = file.getOriginalFilename();
        String storedFileName = UUID.randomUUID() + "." + originalFileName;

        if (!FileUtil.isImageFile(originalFileName)) {
            throw new UnsupportedFormatException();
        }

        Path newFilePath = Paths.get(uploadDir, storedFileName);
        Files.createDirectories(newFilePath.getParent()); // 디렉토리가 없으면 생성
        file.transferTo(newFilePath); // 새 파일 저장

        String ext = getFileExt(originalFileName);
        oldFileEntity.setType("image/" + ext);
        oldFileEntity.setName(originalFileName);
        oldFileEntity.setPath(storedFileName);
        fileRepository.save(oldFileEntity); // 엔터티 업데이트

        return new FileResponse(oldFileEntity);
    }

    @Override
    public FileResponse getFile(int fileId) {
        File fileEntity = fileRepository.findById(fileId)
                .orElseThrow(FileNotFoundException::new);
        return new FileResponse(fileEntity);
    }

}
