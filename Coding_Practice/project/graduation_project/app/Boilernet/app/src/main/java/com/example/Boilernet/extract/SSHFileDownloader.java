package com.example.Boilernet.extract;

import com.jcraft.jsch.*;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
public class SSHFileDownloader {
    public static void downloadFile() {
        JSch jsch = new JSch();
        Session session = null;

        try {
            // SSH 연결 설정
            session = jsch.getSession("username", "server_ip", 22);
            session.setPassword("password");
            session.setConfig("StrictHostKeyChecking", "no");
            session.connect();

            // SCP로 파일 다운로드
            String remoteFilePath = "/path/to/remote_file.txt";
            String localFilePath = "C:\\Boilernet\\app\\src\\main\\assets\\main_content.txt";
            ChannelSftp channelSftp = (ChannelSftp) session.openChannel("sftp");
            channelSftp.connect();
            channelSftp.get(remoteFilePath, localFilePath);

            // 연결 종료
            channelSftp.disconnect();
        } catch (JSchException | SftpException e) {
            e.printStackTrace();
        } finally {
            if (session != null) {
                session.disconnect();
            }
        }
    }

    private String readDownloadedFile(String filePath) {
        StringBuilder content = new StringBuilder();

        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = reader.readLine()) != null) {
                content.append(line).append("\n");
            }
        } catch (IOException e) {
            e.printStackTrace();
            return "파일을 읽는 중 오류가 발생했습니다.";
        }

        return content.toString();
    }
}