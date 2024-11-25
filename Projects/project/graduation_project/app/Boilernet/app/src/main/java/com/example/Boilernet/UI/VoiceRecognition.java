package com.example.Boilernet.UI;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.speech.RecognitionListener;
import android.speech.RecognizerIntent;
import android.speech.SpeechRecognizer;
import android.util.Log;
import android.widget.Toast;

import com.example.Boilernet.SubActivity;

import java.util.ArrayList;
import java.util.Locale;


public class VoiceRecognition {
    private SpeechRecognizer speechRecognizer;
    private Context context;

    public VoiceRecognition(Context context) {
        this.context = context;
        // 생성자에서 초기화
        speechRecognizer = SpeechRecognizer.createSpeechRecognizer(context);
        speechRecognizer.setRecognitionListener(new RecognitionListener() {
            @Override
            public void onReadyForSpeech(Bundle bundle) {
                Toast.makeText(context,"음성인식 시작",Toast.LENGTH_SHORT).show();
            }

            @Override
            public void onBeginningOfSpeech() {

            }

            @Override
            public void onRmsChanged(float v) {

            }

            @Override
            public void onBufferReceived(byte[] bytes) {

            }

            @Override
            public void onEndOfSpeech() {

            }

            @Override
            public void onError(int errorCode) {
                Log.e("VoiceRecognition", "Error code: " + errorCode);

                String errorMessage;
                switch (errorCode) {
                    // 오류 코드에 따른 처리
                    case SpeechRecognizer.ERROR_NETWORK:
                        errorMessage = "네트워크 오류입니다. 네트워크 연결을 확인해주세요.";
                        break;
                    case SpeechRecognizer.ERROR_NO_MATCH:
                        errorMessage = "인식된 음성이 없습니다. 다시 시도해주세요.";
                        break;
                    case SpeechRecognizer.ERROR_AUDIO:
                        errorMessage = "오디오 오류가 발생했습니다.";
                        break;
                    case SpeechRecognizer.ERROR_CLIENT:
                        errorMessage = "클라이언트 오류";
                        break;
                    case SpeechRecognizer.ERROR_INSUFFICIENT_PERMISSIONS:
                        errorMessage = "권한 부족";
                        break;
                    case SpeechRecognizer.ERROR_NETWORK_TIMEOUT:
                        errorMessage = "네트워크 시간 초과";
                        break;

                    default:
                        errorMessage = "음성 인식 오류가 발생했습니다.";
                        break;
                }
                Toast.makeText(context, errorMessage, Toast.LENGTH_SHORT).show();

//                Toast.makeText(context,"음성인식 오류",Toast.LENGTH_SHORT).show();
            }

            @Override
            public void onResults(Bundle results) {
                ArrayList<String> matches = results.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);
                if (matches != null && !matches.isEmpty()) {
                    String recognizedSpeech = matches.get(0);
                    // 음성 인식 결과 처리
                    processRecognizedSpeech(recognizedSpeech);
                }
            }

            @Override
            public void onPartialResults(Bundle bundle) {

            }

            @Override
            public void onEvent(int i, Bundle bundle) {

            }
            // 다른 음성 인식 콜백 메서드 구현
        });
    }

    public void startListening() {
        // 음성 인식 시작
        Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, Locale.getDefault());
        speechRecognizer.startListening(intent);
    }

    private void processRecognizedSpeech(String recognizedSpeech) {
        // 음성 인식 결과를 Toast로 표시
        Toast.makeText(context, recognizedSpeech, Toast.LENGTH_SHORT).show();

        // 음성 인식 결과를 subactivity로 전달
        if (context instanceof SubActivity) {
            SubActivity subActivity = (SubActivity) context;

            if(recognizedSpeech.contains("처음으로")){
                subActivity.performGoBack();
            }
            else if(recognizedSpeech.contains("전기사")){
                subActivity.performReadPreviousArticle();
            }
            else if(recognizedSpeech.contains("재생")){
                subActivity.performPlay();
            }
        }
    }
}
