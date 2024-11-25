#include "console.h"

#include <stdio.h>
#include <stdlib.h>
#include <time.h>


#define KEYCODE_Q 'Q'
#define KEYCODE_W 'W'
#define KEYCODE_E 'E'
#define KEYCODE_R 'R'
#define KEYCODE_ENTER 0x0d



// 프로그램 전체에서 사용할 각종 이름들을 선언해 둘 만한 부분

// 문제 글자 코드: 'Q', 'W', 'E', 'R' 중 하나
int code_moonje;

// 문제를 적을 x좌표(왼쪽 글자의 위치)
int pos_moonje_x;

// 문제를 적을 y좌표
int pos_moonje_y;

// 오답을 입력한 경우 해당 코드를 담아 둘 변수
int code_ohdap;



// 0 -> 1번 state로 전환되기까지의 시간 간격(매 번 달라짐)
double interval_choolje;

// 1 -> 4번 state로 전환되기까지의 시간 간격(기본적으로는 고정. 뭐 난이도 기능 등을 추가하면 runtime에 달라질 지도?)
double timeout = 0.5;

// 2, 3, 4, 5 -> 6번 state로 전환되기까지의 시간 간격(얘는 아마도 그냥 고정해 둘 듯)
double interval_restart = 5.0;


/*
0: 시작
1: 출제
2: 성공
3. 오타
4: 시간초과
5: 반칙
6: 재시작?
*/
int state = 0, next_state = 0;

// 이번 상태에 돌입한 시각(시간 경과 체크에 사용됨)
double time_enter;




// 이 아랫줄 왼쪽에 있는 [-] 버튼을 클릭하면 '안 봐도 되는 부분'을 가릴 수 있어요.
#pragma region 안 봐도 되는 부분


// 각 state별 '입력 처리 방법'을 나타내는 함수들에 대한 선언들
// - 인수 info에는 '이번에 들어온 입력'이 담겨요.
// - return값은 '다음 state'를 의미해요.
int Process_Input_0(struct Info_Input info), Process_Input_1(struct Info_Input info), Process_Input_2(struct Info_Input info), Process_Input_3(struct Info_Input info), Process_Input_4(struct Info_Input info), Process_Input_5(struct Info_Input info), Process_Input_6(struct Info_Input info);

// 이 흉악한 친구는 지금은 몰라도 괜찮아요.
// 위에 선언해 둔 각 이름들을 사용하여, 입력 처리 함수들에 대해 정의된 위치 값 전부를 번호 순서대로 담아 둔 배열이에요.
// - 인수 info에는 '이번에 들어온 입력'이 담겨요.
// - return값은 '다음 state'를 의미해요.
int(*ptrs_Process_Input[])(struct Info_Input info) = { &Process_Input_0, &Process_Input_1, &Process_Input_2 , &Process_Input_3 , &Process_Input_4 , &Process_Input_5 , &Process_Input_6 };


// 각 state별 '전환(진입) 방법'을 나타내는 함수들에 대한 선언들
// return값은 뭐 아무거나 정해도 좋아요(실제로 쓰이지는 않아요).
int State_Enter_0(), State_Enter_1(), State_Enter_2(), State_Enter_3(), State_Enter_4(), State_Enter_5(), State_Enter_6();

// 이 흉악한 친구는 지금은 몰라도 괜찮아요.
// 위에 선언해 둔 각 이름들을 사용하여, state 진입 함수들에 대해 정의된 위치 값 전부를 번호 순서대로 담아 둔 배열이에요.
int(*ptrs_State_Enter[])() = { &State_Enter_0, &State_Enter_1, &State_Enter_2 , &State_Enter_3 , &State_Enter_4 , &State_Enter_5 , &State_Enter_6 };


// 각 state별 '시간 경과에 따른 처리 방법'을 나타내는 함수들에 대한 선언들
// - 인수 time_elapsed에는 '이번 state가 되고 나서 경과된 시간'이 담겨요.
// - return값은 '다음 state'를 의미해요.
int Check_Timeout_0(double time_elapsed), Check_Timeout_1(double time_elapsed), Check_Timeout_2(double time_elapsed), Check_Timeout_3(double time_elapsed), Check_Timeout_4(double time_elapsed), Check_Timeout_5(double time_elapsed), Check_Timeout_6(double time_elapsed);

// 이 흉악한 친구는 지금은 몰라도 괜찮아요.
// 위에 선언해 둔 각 이름들을 사용하여, 시간 경과 처리 함수들에 대해 정의된 위치 값 전부를 번호 순서대로 담아 둔 배열이에요.
// - 인수 time_elapsed에는 '이번 state가 되고 나서 경과된 시간'이 담겨요.
// - return값은 '다음 state'를 의미해요.
int(*ptrs_Check_Timeout[])(double time_elapsed) = { &Check_Timeout_0, &Check_Timeout_1, &Check_Timeout_2 , &Check_Timeout_3 , &Check_Timeout_4 , &Check_Timeout_5 , &Check_Timeout_6 };



#pragma endregion



int main()
{
	Start_Console();

	srand(time(0));

	Stopwatch_Start();

	// 프로그램을 처음 켜면 일단 시작 상태로 전환
	State_Enter_0();

	while (1)
	{
		/* -------------------------------------------
		입력 처리 부분
		*/

		Accept_Inputs();

		while (Can_Read())
		{
			struct Info_Input info;

			Read_Input(&info);

			// 이번 입력이 '키 누름 입력'인 경우
			// 주: 프로그램을 켜자 마자 키를 누른다면 이 부분은 오작동하게 돼요. 근데 그럴 가능성은 사실상 없으니 지금은 크게 걱정하지 않아도 될 듯!
			if (info.type == TypeCode_Key_Press)
			{
				// 이번 state에 대한 입력 처리 함수 호출 후 return값을 next_state에 담음
				next_state = (*ptrs_Process_Input[state])(info);

				// state 전환이 발생했나 체크
				if (state != next_state)
				{
					// state 전환
					state = next_state;

					// 전환된 state에 대한 '전환 방법 함수' 호출
					(*ptrs_State_Enter[state])();

					// 방금 전환이 이루어졌으므로 '진입 시각' 기록
					time_enter = Stopwatch_Get();
				}

				// 다른 입력을 더 처리하긴 매우 귀찮으므로 그냥 버리고 탈출
				break;
			}
		}

		/* -------------------------------------------
		시간 경과 처리 부분
		*/

		// 이번 state에 대한 시간 경과 처리 함수 호출 후 return값을 next_state에 담음
		next_state = (*ptrs_Check_Timeout[state])(Stopwatch_Get() - time_enter);

		// state 전환이 발생했나 체크
		if (state != next_state)
		{
			// state 전환
			state = next_state;

			// 전환된 state에 대한 '전환 방법 함수' 호출
			(*ptrs_State_Enter[state])();

			// 방금 전환이 이루어졌으므로 '진입 시각' 기록
			time_enter = Stopwatch_Get();
		}



		// 잠시 쉬는 부분
		Stopwatch_SpinLock(1.0 / 240);
	}

	return 0;
}




/* -------------------------------------------
위에서 선언해 둔 각 함수들을 정의하는 부분
*/


int Process_Input_0(struct Info_Input info)
{
	// 시작 상태에서 키를 누르면 무조건 반칙 상태로 전환해야 함
	return 5;
}


int Process_Input_1(struct Info_Input info)
{
	// 출제 상태에서는 누른 키가 정답인지 아닌지에 따라 성공 / 오타 상태로 전환해야 함
	// - 오타 상태로 전환한다면 사용자가 입력한 오답 정보를 별도의 변수에 백업해 두어야 함
	if (info.code == code_moonje)
		return 2;

	code_ohdap = info.code;
	return 3;
}


int Process_Input_2(struct Info_Input info)
{
	// 성공 상태에서는 키 입력은 무시(원래 상태 그대로 유지)
	return 2;
}


int Process_Input_3(struct Info_Input info)
{
	// 오타 상태에서는 키 입력은 무시(원래 상태 그대로 유지)
	return 3;
}


int Process_Input_4(struct Info_Input info)
{
	// 시간초과 상태에서는 키 입력은 무시(원래 상태 그대로 유지)
	return 4;
}


int Process_Input_5(struct Info_Input info)
{
	// 반칙 상태에서는 키 입력은 무시(원래 상태 그대로 유지)
	return 5;
}


int Process_Input_6(struct Info_Input info)
{
	// 재시작? 상태에서는 엔터 키를 누르면 시작 상태로 전환해야 함(그렇지 않은 경우 원래 상태 그대로 유지)
	if (info.code == KEYCODE_ENTER)
		return 0;

	return 6;
}




int State_Enter_0()
{
	// 시작 상태가 되면 다음 문제를 준비해야 함
	// - 문제 글자가 무엇인지, 그 글자를 어떤 위치에 print할 지, 그 글자를 언제 print할 지 지정해야 함
	// - '재시작'의 경우를 감안해서 화면을 지우고 ㄱㄱ하면 좋을 듯( ClearScreen()을 호출하면 됨 )
	Clear_Screen();

	code_moonje = rand() % 4;

	if (code_moonje == 0)
		code_moonje = KEYCODE_Q;
	else if (code_moonje == 1)
		code_moonje = KEYCODE_W;
	else if (code_moonje == 2)
		code_moonje = KEYCODE_E;
	else
		code_moonje = KEYCODE_R;

	pos_moonje_x = rand() % (INIT_CONSOLE_WIDTH - 1);
	pos_moonje_y = rand() % INIT_CONSOLE_HEIGHT;

	interval_choolje = rand() % 5000;
	interval_choolje = interval_choolje / 1000 + 0.5;
}

int State_Enter_1()
{
	// 출제 상태가 되면 화면에 문제를 print해야 함
	// Note. 'Q', 'W', 'E', 'R'의 경우 그냥 코드 값을 %c로 출력해도 무방
	Move_Cursor(pos_moonje_x, pos_moonje_y);
	printf("%c!", code_moonje);
}

int State_Enter_2()
{
	// 성공 상태가 되면 정해진 승리 메시지와 '얼마만에 눌렀었는지'를 print해야 함
	// Note. 수식 Stopwatch_Get() - time_enter 을 통해 해당 값을 얻을 수 있음
	Set_Color(COLOR(COLOR_BLACK, COLOR_GREEN), 1);
	Move_Cursor(0, INIT_CONSOLE_HEIGHT);
	printf("성공! %.3f초만에 키를 눌렀습니다!", Stopwatch_Get() - time_enter);
}

int State_Enter_3()
{
	// 오타 상태가 되면 정해진 패배 메시지와 '뭐 눌러야 하는데 뭐 눌렀었는지'를 print해야 함
	// Note. '뭐 눌렀는지'는 Process_Input_1()에서 미리 백업해 두었어야 함
	Set_Color(COLOR(COLOR_BLACK, COLOR_CYAN), 1);
	Move_Cursor(0, INIT_CONSOLE_HEIGHT);
	printf("실패... %c 눌러야 하는데 %c 눌렀습니다.", code_moonje, code_ohdap);
}

int State_Enter_4()
{
	// 시간초과 상태가 되면 정해진 패배 메시지를 print해야 함
	Set_Color(COLOR(COLOR_BLACK, COLOR_WHITE), 1);
	Move_Cursor(0, INIT_CONSOLE_HEIGHT);
	printf("실패... %.3f초 안에 키를 누르지 못했습니다.", timeout);
}

int State_Enter_5()
{
	// 반칙 상태가 되면 정해진 패배 메시지를 print해야 함
	Set_Color(COLOR(COLOR_BLACK, COLOR_RED | COLOR_INTENSITY), 1);
	Move_Cursor(0, INIT_CONSOLE_HEIGHT);
	printf("반칙! 문제가 나오기도 전에 키를 눌렀습니다.");
}

int State_Enter_6()
{
	// 재시작? 상태가 되면 정해진 재시작 방법 메시지를 print해야 함
	Set_Color(INIT_DEFAULT_COLOR, 1);
	Move_Cursor(0, INIT_CONSOLE_HEIGHT);
	printf("다시 한 번 시작하려면 엔터 키를 누르세요. . .");
}



int Check_Timeout_0(double time_elapsed)
{
	// 시작 상태에서는 몰래 정한 시간이 다 되면 출제 상태로 전환함(그렇지 않은 경우 원래 상태 그대로 유지)
	if (time_elapsed >= interval_choolje)
		return 1;

	return 0;
}

int Check_Timeout_1(double time_elapsed)
{
	// 출제 상태에서는 정해진 시간이 다 되면 시간초과 상태로 전환함(그렇지 않은 경우 원래 상태 그대로 유지)
	if (time_elapsed >= timeout)
		return 4;

	return 1;
}

int Check_Timeout_2(double time_elapsed)
{
	// 성공 상태에서는 정해진 시간이 다 되면 재시작? 상태로 전환함(그렇지 않은 경우 원래 상태 그대로 유지)
	if (time_elapsed >= interval_restart)
		return 6;

	return 2;
}

int Check_Timeout_3(double time_elapsed)
{
	// 오타 상태에서는 정해진 시간이 다 되면 재시작? 상태로 전환함(그렇지 않은 경우 원래 상태 그대로 유지)
	if (time_elapsed >= interval_restart)
		return 6;

	return 3;
}

int Check_Timeout_4(double time_elapsed)
{
	// 시간초과 상태에서는 정해진 시간이 다 되면 재시작? 상태로 전환함(그렇지 않은 경우 원래 상태 그대로 유지)
	if (time_elapsed >= interval_restart)
		return 6;

	return 4;
}

int Check_Timeout_5(double time_elapsed)
{
	// 반칙 상태에서는 정해진 시간이 다 되면 재시작? 상태로 전환함(그렇지 않은 경우 원래 상태 그대로 유지)
	if (time_elapsed >= interval_restart)
		return 6;

	return 5;
}

int Check_Timeout_6(double time_elapsed)
{
	// 재시작? 상태에서는 시간 경과는 무시(원래 상태 그대로 유지)
	return 6;
}