package com.f1veguys.sel.file.service;

import com.f1veguys.sel.file.dto.FileResponse;
import org.springframework.web.multipart.MultipartFile;

public interface FileService {
    FileResponse saveFile(MultipartFile file) throws Exception;
    void deleteFile(int fileId) throws Exception;
    FileResponse updateFile(int fileId, MultipartFile file) throws Exception;
    FileResponse getFile(int fileId);

}
