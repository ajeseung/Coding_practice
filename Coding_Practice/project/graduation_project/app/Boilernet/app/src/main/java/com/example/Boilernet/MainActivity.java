package com.example.Boilernet;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends Activity {

    private EditText urlEditText;
    private Button submitButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        urlEditText = findViewById(R.id.edit_text_url);
        submitButton = findViewById(R.id.btn_submit);

        submitButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String input = urlEditText.getText().toString();

                // URL을 SubActivity로 전달
                Intent intent = new Intent(MainActivity.this,SubActivity.class);
                intent.putExtra("url", input);
                startActivity(intent);
            }
        });
    }
}
