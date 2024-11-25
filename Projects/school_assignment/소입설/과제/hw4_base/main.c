#include "console.h"

#include <stdio.h>
#include <stdlib.h>
#include <time.h>


#define KEYCODE_Q 'Q'
#define KEYCODE_W 'W'
#define KEYCODE_E 'E'
#define KEYCODE_R 'R'
#define KEYCODE_ENTER 0x0d



// ���α׷� ��ü���� ����� ���� �̸����� ������ �� ���� �κ�

// ���� ���� �ڵ�: 'Q', 'W', 'E', 'R' �� �ϳ�
int code_moonje;

// ������ ���� x��ǥ(���� ������ ��ġ)
int pos_moonje_x;

// ������ ���� y��ǥ
int pos_moonje_y;

// ������ �Է��� ��� �ش� �ڵ带 ��� �� ����
int code_ohdap;



// 0 -> 1�� state�� ��ȯ�Ǳ������ �ð� ����(�� �� �޶���)
double interval_choolje;

// 1 -> 4�� state�� ��ȯ�Ǳ������ �ð� ����(�⺻�����δ� ����. �� ���̵� ��� ���� �߰��ϸ� runtime�� �޶��� ����?)
double timeout = 0.5;

// 2, 3, 4, 5 -> 6�� state�� ��ȯ�Ǳ������ �ð� ����(��� �Ƹ��� �׳� ������ �� ��)
double interval_restart = 5.0;


/*
0: ����
1: ����
2: ����
3. ��Ÿ
4: �ð��ʰ�
5: ��Ģ
6: �����?
*/
int state = 0, next_state = 0;

// �̹� ���¿� ������ �ð�(�ð� ��� üũ�� ����)
double time_enter;




// �� �Ʒ��� ���ʿ� �ִ� [-] ��ư�� Ŭ���ϸ� '�� ���� �Ǵ� �κ�'�� ���� �� �־��.
#pragma region �� ���� �Ǵ� �κ�


// �� state�� '�Է� ó�� ���'�� ��Ÿ���� �Լ��鿡 ���� �����
// - �μ� info���� '�̹��� ���� �Է�'�� ��ܿ�.
// - return���� '���� state'�� �ǹ��ؿ�.
int Process_Input_0(struct Info_Input info), Process_Input_1(struct Info_Input info), Process_Input_2(struct Info_Input info), Process_Input_3(struct Info_Input info), Process_Input_4(struct Info_Input info), Process_Input_5(struct Info_Input info), Process_Input_6(struct Info_Input info);

// �� ����� ģ���� ������ ���� �����ƿ�.
// ���� ������ �� �� �̸����� ����Ͽ�, �Է� ó�� �Լ��鿡 ���� ���ǵ� ��ġ �� ���θ� ��ȣ ������� ��� �� �迭�̿���.
// - �μ� info���� '�̹��� ���� �Է�'�� ��ܿ�.
// - return���� '���� state'�� �ǹ��ؿ�.
int(*ptrs_Process_Input[])(struct Info_Input info) = { &Process_Input_0, &Process_Input_1, &Process_Input_2 , &Process_Input_3 , &Process_Input_4 , &Process_Input_5 , &Process_Input_6 };


// �� state�� '��ȯ(����) ���'�� ��Ÿ���� �Լ��鿡 ���� �����
// return���� �� �ƹ��ų� ���ص� ���ƿ�(������ �������� �ʾƿ�).
int State_Enter_0(), State_Enter_1(), State_Enter_2(), State_Enter_3(), State_Enter_4(), State_Enter_5(), State_Enter_6();

// �� ����� ģ���� ������ ���� �����ƿ�.
// ���� ������ �� �� �̸����� ����Ͽ�, state ���� �Լ��鿡 ���� ���ǵ� ��ġ �� ���θ� ��ȣ ������� ��� �� �迭�̿���.
int(*ptrs_State_Enter[])() = { &State_Enter_0, &State_Enter_1, &State_Enter_2 , &State_Enter_3 , &State_Enter_4 , &State_Enter_5 , &State_Enter_6 };


// �� state�� '�ð� ����� ���� ó�� ���'�� ��Ÿ���� �Լ��鿡 ���� �����
// - �μ� time_elapsed���� '�̹� state�� �ǰ� ���� ����� �ð�'�� ��ܿ�.
// - return���� '���� state'�� �ǹ��ؿ�.
int Check_Timeout_0(double time_elapsed), Check_Timeout_1(double time_elapsed), Check_Timeout_2(double time_elapsed), Check_Timeout_3(double time_elapsed), Check_Timeout_4(double time_elapsed), Check_Timeout_5(double time_elapsed), Check_Timeout_6(double time_elapsed);

// �� ����� ģ���� ������ ���� �����ƿ�.
// ���� ������ �� �� �̸����� ����Ͽ�, �ð� ��� ó�� �Լ��鿡 ���� ���ǵ� ��ġ �� ���θ� ��ȣ ������� ��� �� �迭�̿���.
// - �μ� time_elapsed���� '�̹� state�� �ǰ� ���� ����� �ð�'�� ��ܿ�.
// - return���� '���� state'�� �ǹ��ؿ�.
int(*ptrs_Check_Timeout[])(double time_elapsed) = { &Check_Timeout_0, &Check_Timeout_1, &Check_Timeout_2 , &Check_Timeout_3 , &Check_Timeout_4 , &Check_Timeout_5 , &Check_Timeout_6 };



#pragma endregion



int main()
{
	Start_Console();

	srand(time(0));

	Stopwatch_Start();

	// ���α׷��� ó�� �Ѹ� �ϴ� ���� ���·� ��ȯ
	State_Enter_0();

	while (1)
	{
		/* -------------------------------------------
		�Է� ó�� �κ�
		*/

		Accept_Inputs();

		while (Can_Read())
		{
			struct Info_Input info;

			Read_Input(&info);

			// �̹� �Է��� 'Ű ���� �Է�'�� ���
			// ��: ���α׷��� ���� ���� Ű�� �����ٸ� �� �κ��� ���۵��ϰ� �ſ�. �ٵ� �׷� ���ɼ��� ��ǻ� ������ ������ ũ�� �������� �ʾƵ� �� ��!
			if (info.type == TypeCode_Key_Press)
			{
				// �̹� state�� ���� �Է� ó�� �Լ� ȣ�� �� return���� next_state�� ����
				next_state = (*ptrs_Process_Input[state])(info);

				// state ��ȯ�� �߻��߳� üũ
				if (state != next_state)
				{
					// state ��ȯ
					state = next_state;

					// ��ȯ�� state�� ���� '��ȯ ��� �Լ�' ȣ��
					(*ptrs_State_Enter[state])();

					// ��� ��ȯ�� �̷�������Ƿ� '���� �ð�' ���
					time_enter = Stopwatch_Get();
				}

				// �ٸ� �Է��� �� ó���ϱ� �ſ� �������Ƿ� �׳� ������ Ż��
				break;
			}
		}

		/* -------------------------------------------
		�ð� ��� ó�� �κ�
		*/

		// �̹� state�� ���� �ð� ��� ó�� �Լ� ȣ�� �� return���� next_state�� ����
		next_state = (*ptrs_Check_Timeout[state])(Stopwatch_Get() - time_enter);

		// state ��ȯ�� �߻��߳� üũ
		if (state != next_state)
		{
			// state ��ȯ
			state = next_state;

			// ��ȯ�� state�� ���� '��ȯ ��� �Լ�' ȣ��
			(*ptrs_State_Enter[state])();

			// ��� ��ȯ�� �̷�������Ƿ� '���� �ð�' ���
			time_enter = Stopwatch_Get();
		}



		// ��� ���� �κ�
		Stopwatch_SpinLock(1.0 / 240);
	}

	return 0;
}




/* -------------------------------------------
������ ������ �� �� �Լ����� �����ϴ� �κ�
*/


int Process_Input_0(struct Info_Input info)
{
	// ���� ���¿��� Ű�� ������ ������ ��Ģ ���·� ��ȯ�ؾ� ��
	return 5;
}


int Process_Input_1(struct Info_Input info)
{
	// ���� ���¿����� ���� Ű�� �������� �ƴ����� ���� ���� / ��Ÿ ���·� ��ȯ�ؾ� ��
	// - ��Ÿ ���·� ��ȯ�Ѵٸ� ����ڰ� �Է��� ���� ������ ������ ������ ����� �ξ�� ��
	if (info.code == code_moonje)
		return 2;

	code_ohdap = info.code;
	return 3;
}


int Process_Input_2(struct Info_Input info)
{
	// ���� ���¿����� Ű �Է��� ����(���� ���� �״�� ����)
	return 2;
}


int Process_Input_3(struct Info_Input info)
{
	// ��Ÿ ���¿����� Ű �Է��� ����(���� ���� �״�� ����)
	return 3;
}


int Process_Input_4(struct Info_Input info)
{
	// �ð��ʰ� ���¿����� Ű �Է��� ����(���� ���� �״�� ����)
	return 4;
}


int Process_Input_5(struct Info_Input info)
{
	// ��Ģ ���¿����� Ű �Է��� ����(���� ���� �״�� ����)
	return 5;
}


int Process_Input_6(struct Info_Input info)
{
	// �����? ���¿����� ���� Ű�� ������ ���� ���·� ��ȯ�ؾ� ��(�׷��� ���� ��� ���� ���� �״�� ����)
	if (info.code == KEYCODE_ENTER)
		return 0;

	return 6;
}




int State_Enter_0()
{
	// ���� ���°� �Ǹ� ���� ������ �غ��ؾ� ��
	// - ���� ���ڰ� ��������, �� ���ڸ� � ��ġ�� print�� ��, �� ���ڸ� ���� print�� �� �����ؾ� ��
	// - '�����'�� ��츦 �����ؼ� ȭ���� ����� �����ϸ� ���� ��( ClearScreen()�� ȣ���ϸ� �� )
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
	// ���� ���°� �Ǹ� ȭ�鿡 ������ print�ؾ� ��
	// Note. 'Q', 'W', 'E', 'R'�� ��� �׳� �ڵ� ���� %c�� ����ص� ����
	Move_Cursor(pos_moonje_x, pos_moonje_y);
	printf("%c!", code_moonje);
}

int State_Enter_2()
{
	// ���� ���°� �Ǹ� ������ �¸� �޽����� '�󸶸��� ����������'�� print�ؾ� ��
	// Note. ���� Stopwatch_Get() - time_enter �� ���� �ش� ���� ���� �� ����
	Set_Color(COLOR(COLOR_BLACK, COLOR_GREEN), 1);
	Move_Cursor(0, INIT_CONSOLE_HEIGHT);
	printf("����! %.3f�ʸ��� Ű�� �������ϴ�!", Stopwatch_Get() - time_enter);
}

int State_Enter_3()
{
	// ��Ÿ ���°� �Ǹ� ������ �й� �޽����� '�� ������ �ϴµ� �� ����������'�� print�ؾ� ��
	// Note. '�� ��������'�� Process_Input_1()���� �̸� ����� �ξ���� ��
	Set_Color(COLOR(COLOR_BLACK, COLOR_CYAN), 1);
	Move_Cursor(0, INIT_CONSOLE_HEIGHT);
	printf("����... %c ������ �ϴµ� %c �������ϴ�.", code_moonje, code_ohdap);
}

int State_Enter_4()
{
	// �ð��ʰ� ���°� �Ǹ� ������ �й� �޽����� print�ؾ� ��
	Set_Color(COLOR(COLOR_BLACK, COLOR_WHITE), 1);
	Move_Cursor(0, INIT_CONSOLE_HEIGHT);
	printf("����... %.3f�� �ȿ� Ű�� ������ ���߽��ϴ�.", timeout);
}

int State_Enter_5()
{
	// ��Ģ ���°� �Ǹ� ������ �й� �޽����� print�ؾ� ��
	Set_Color(COLOR(COLOR_BLACK, COLOR_RED | COLOR_INTENSITY), 1);
	Move_Cursor(0, INIT_CONSOLE_HEIGHT);
	printf("��Ģ! ������ �����⵵ ���� Ű�� �������ϴ�.");
}

int State_Enter_6()
{
	// �����? ���°� �Ǹ� ������ ����� ��� �޽����� print�ؾ� ��
	Set_Color(INIT_DEFAULT_COLOR, 1);
	Move_Cursor(0, INIT_CONSOLE_HEIGHT);
	printf("�ٽ� �� �� �����Ϸ��� ���� Ű�� ��������. . .");
}



int Check_Timeout_0(double time_elapsed)
{
	// ���� ���¿����� ���� ���� �ð��� �� �Ǹ� ���� ���·� ��ȯ��(�׷��� ���� ��� ���� ���� �״�� ����)
	if (time_elapsed >= interval_choolje)
		return 1;

	return 0;
}

int Check_Timeout_1(double time_elapsed)
{
	// ���� ���¿����� ������ �ð��� �� �Ǹ� �ð��ʰ� ���·� ��ȯ��(�׷��� ���� ��� ���� ���� �״�� ����)
	if (time_elapsed >= timeout)
		return 4;

	return 1;
}

int Check_Timeout_2(double time_elapsed)
{
	// ���� ���¿����� ������ �ð��� �� �Ǹ� �����? ���·� ��ȯ��(�׷��� ���� ��� ���� ���� �״�� ����)
	if (time_elapsed >= interval_restart)
		return 6;

	return 2;
}

int Check_Timeout_3(double time_elapsed)
{
	// ��Ÿ ���¿����� ������ �ð��� �� �Ǹ� �����? ���·� ��ȯ��(�׷��� ���� ��� ���� ���� �״�� ����)
	if (time_elapsed >= interval_restart)
		return 6;

	return 3;
}

int Check_Timeout_4(double time_elapsed)
{
	// �ð��ʰ� ���¿����� ������ �ð��� �� �Ǹ� �����? ���·� ��ȯ��(�׷��� ���� ��� ���� ���� �״�� ����)
	if (time_elapsed >= interval_restart)
		return 6;

	return 4;
}

int Check_Timeout_5(double time_elapsed)
{
	// ��Ģ ���¿����� ������ �ð��� �� �Ǹ� �����? ���·� ��ȯ��(�׷��� ���� ��� ���� ���� �״�� ����)
	if (time_elapsed >= interval_restart)
		return 6;

	return 5;
}

int Check_Timeout_6(double time_elapsed)
{
	// �����? ���¿����� �ð� ����� ����(���� ���� �״�� ����)
	return 6;
}