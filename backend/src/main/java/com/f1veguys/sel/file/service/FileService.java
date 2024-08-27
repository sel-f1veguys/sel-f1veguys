package com.f1veguys.sel.file.service;

import com.f1veguys.sel.campaign.domain.Campaign;
import com.f1veguys.sel.file.domain.File;
import com.f1veguys.sel.file.dto.FileResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileService {
    File saveFile(MultipartFile file, Campaign campaign) throws IOException;
    void deleteFile(int fileId) throws IOException;
    FileResponse updateFile(int fileId, MultipartFile file) throws IOException;
    FileResponse getFile(int fileId);
}
