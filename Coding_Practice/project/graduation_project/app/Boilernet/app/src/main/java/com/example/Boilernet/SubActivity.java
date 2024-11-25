package com.example.Boilernet;

import android.content.Context;
import android.content.res.AssetManager;

import android.app.Activity;
import android.content.ContentValues;
import android.content.Intent;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.speech.SpeechRecognizer;
import android.text.method.ScrollingMovementMethod;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.example.Boilernet.extract.Process;
import com.example.Boilernet.output.PlayState;
import com.example.Boilernet.output.Voice;
import com.example.Boilernet.UI.VoiceRecognition;
import com.example.Boilernet.extract.SSHFileDownloader;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class SubActivity extends Activity {
    private TextView articleTextView;
    private Button playButton;
    private Button pauseButton;
    private Button stopButton;
    private Button readPreviousArticleButton;
    private Button btnGoBack;
    private Button startVoiceRecognition;
    private Voice voice;
    private Process process;
    private VoiceRecognition voiceRecognition;
    private String[] textFileNames = {"main_content1.txt", "main_content2.txt", "main_content3.txt", "main_content4.txt", "main_content5.txt"};
    private int currentFileIndex = textFileNames.length - 1;
    private Context context;
    private String textFromAsset;
    private PlayState playstate;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sub);

        articleTextView = findViewById(R.id.text_view_content);
        articleTextView.setMovementMethod(new ScrollingMovementMethod());
        playButton = findViewById(R.id.btn_play);
        pauseButton = findViewById(R.id.btn_pause);
        stopButton = findViewById(R.id.btn_stop);
        readPreviousArticleButton = findViewById(R.id.btn_read_previous_article);
        btnGoBack = findViewById(R.id.btn_go_back);
        startVoiceRecognition = findViewById(R.id.btn_start_voice_recognition);
        voice = new Voice(this);
        process = new Process();
        voiceRecognition = new VoiceRecognition(this);


        textFromAsset = voice.loadTextFileFromAsset("main_content5.txt");
        if(textFromAsset != null){
            articleTextView.setText(textFromAsset);
        }
        else{
            Toast.makeText(context,"기사 없음",Toast.LENGTH_SHORT).show();
        }


        // 각 버튼의 클릭 리스너 구현
        playButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if(textFromAsset != null) {
                    voice.startPlay(textFromAsset);
                }
            }
        });

        pauseButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                    voice.pausePlay();
                }

        });

        stopButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // 정지 버튼 동작
                voice.stopPlay();
            }
        });

        readPreviousArticleButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                voice.stopPlay();
                readPreviousArticle();
            }
        });

        btnGoBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // 첫 화면으로 돌아가는 Intent를 생성
                Intent intent = new Intent(SubActivity.this, MainActivity.class);
                startActivity(intent);
                finish(); // 현재 액티비티를 종료하여 뒤로 가기 동작을 처리
            }
        });


        startVoiceRecognition.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // 음성 인식 시작
                voice.pausePlay();
                voiceRecognition.startListening();
            }
        });


    }

    public void readPreviousArticle(){
        if(voice.isStopped() || voice.isPaused()) {
            currentFileIndex--;
            if (currentFileIndex < 0) {
                currentFileIndex = 0;
            }
        }

        String newArticleContent = voice.loadTextFileFromAsset(textFileNames[currentFileIndex]);
        articleTextView.setText(newArticleContent);
        textFromAsset = newArticleContent;

    }


    public void processRecognizedSpeech(String recognizedSpeech){
        if(recognizedSpeech.contains("재생")){
            performPlay();
        }
        else if(recognizedSpeech.contains("중지")){
            voice.stopPlay();
        }
        else if(recognizedSpeech.contains("일시정지")){
            voice.pausePlay();
        }
        else if(recognizedSpeech.contains("처음으로")){
            performGoBack();
        }
        else if(recognizedSpeech.contains("이전 기사")){
            performReadPreviousArticle();
        }
    }

    public void performPlay(){
        playButton.performClick();
    }
    public void performGoBack(){
        btnGoBack.performClick();
    }
    public void performReadPreviousArticle(){
        readPreviousArticleButton.performClick();
    }
    @Override
    protected void onDestroy() {
        voice.onDestroy(); // 액티비티가 종료될 때 TTS 엔진 종료
        super.onDestroy();
    }

}
