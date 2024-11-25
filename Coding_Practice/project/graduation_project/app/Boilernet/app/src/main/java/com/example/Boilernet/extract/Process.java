package com.example.Boilernet.extract;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Process {
    public static boolean executePythonScript(String inputURL) {
        try {
            // Python 스크립트 실행
            java.lang.Process process = Runtime.getRuntime().exec("python3 " + "maincontentextract.py " + inputURL);

            // 스크립트 실행이 완료될 때까지 대기
            process.waitFor();

            // 실행 결과가 정상적으로 완료되면 true 반환
            return process.exitValue() == 0;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public static String downloadFile(String fileURL) {
        try {
            URL url = new URL(fileURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");

            // 서버로부터 데이터를 읽어오기 위한 BufferedReader
            BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            StringBuilder response = new StringBuilder();
            String line;

            while ((line = in.readLine()) != null) {
                response.append(line);
            }

            in.close();
            return response.toString();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}