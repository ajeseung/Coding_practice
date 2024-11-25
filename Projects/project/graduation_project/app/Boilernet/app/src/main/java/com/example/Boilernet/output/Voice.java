package com.example.Boilernet.output;

import android.content.Context;
import android.content.res.AssetManager;
import android.os.Looper;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.os.Bundle;
import android.os.Handler;
import android.widget.Toast;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Locale;

public class Voice {
    private TextToSpeech textToSpeech;
    private Context context;
    private final Bundle params = new Bundle();
    private PlayState playState = PlayState.STOP;
    private String currentContent = "";
    private int currentContentIndex = 0;
    private String[] sentences;
    private int savedPlayIndex = 0;
    private Handler handler;
    private boolean isPaused = false;
    private boolean isStopped = false;

    private final Object lock = new Object();
    public Voice(Context context) {
        this.context = context;
        handler = new Handler(Looper.getMainLooper());
        textToSpeech = new TextToSpeech(context, new TextToSpeech.OnInitListener() {
            @Override
            public void onInit(int state) {
                if (state == TextToSpeech.SUCCESS) {
                    textToSpeech.setLanguage(Locale.KOREAN);
                }
            }
        });

        currentContent = "";
        sentences = new String[0];

        textToSpeech.setOnUtteranceProgressListener(new UtteranceProgressListener() {
            @Override
            public void onStart(String s) {
                showState("tts 시작");
            }

            @Override
            public void onDone(String s) {
                currentContentIndex++;
                if (currentContentIndex < sentences.length && playState == PlayState.PLAY) {
                    startSpeak(sentences[currentContentIndex]);
                } else {
                    playState = PlayState.STOP;
                }
            }

            @Override
            public void onError(String s) {
                showState("재생 중 에러가 발생했습니다.");
            }
        });
    }

    public void startPlay(String content) {
        synchronized (lock) {
            if (playState.isStopping() && !textToSpeech.isSpeaking()) {
                if (savedPlayIndex < sentences.length) {
                    currentContentIndex = savedPlayIndex; // 저장한 위치부터 재생 시작
                } else {
                    if (content != null && !content.isEmpty()) {
                        sentences = content.split("\\.|\\!|\\?");
                        if (sentences != null && sentences.length > 0) { // sentences 배열이 null이 아니고 길이가 1 이상인지 확인
                            currentContent = content;
                            currentContentIndex = 0;
                            startSpeak(sentences[currentContentIndex]);
                        }
                    }
                }
            } else if (playState.isWaiting()) {
                startSpeak(currentContent.substring(currentContentIndex));
            } else if (playState == PlayState.PLAY) {
                startSpeak(currentContent.substring(currentContentIndex));
            }
            playState = PlayState.PLAY;
        }
    }


    public void pausePlay() {
        if (playState.isPlaying()) {
            playState = PlayState.WAIT;
            textToSpeech.stop();
            savedPlayIndex = currentContentIndex;
            isPaused = true;
            isStopped = false;
        }
    }

    public void stopPlay() {
        playState = PlayState.STOP;
        textToSpeech.stop();
        currentContent = "";
        currentContentIndex = 0;
        isStopped = true;
        isPaused = false;
    }

    private void startSpeak(final String text) {
        textToSpeech.speak(text, TextToSpeech.QUEUE_ADD, params, String.valueOf(currentContentIndex));
    }

    private void showState(final String msg) {
        handler.post(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(context.getApplicationContext(), msg,Toast.LENGTH_SHORT).show();
            }
        });
    }
    public boolean isPaused(){
        return isPaused;
    }
    public void setPaused(boolean paused){
        isPaused = paused;
    }
    public boolean isStopped() {
        return isStopped;
    }
    public void setStopped(boolean stopped) {
        isStopped = stopped;
    }

    public String loadTextFileFromAsset(String fileName) {
        try {
            AssetManager assetManager = context.getAssets();
            InputStream inputStream = assetManager.open(fileName);
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));

            // 파일 내용 읽기
            StringBuilder stringBuilder = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                stringBuilder.append(line).append(" ");
            }

            reader.close();

            return stringBuilder.toString();
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    public void onDestroy() {
        textToSpeech.stop();
        textToSpeech.shutdown();
    }
}
