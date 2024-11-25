# -*- coding: euc-kr -*-
# 소프트웨어입문설계 과제#3
#
# 과제#3의 제출 전 테스트, 제출 후 최종 프로그램 제작에 사용할 코어 모듈입니다.
# 수업에서 안 나온 요소를 사용한 부분에는 ☆을 달아 두었어요.
#
# 주의: 여러분의 모듈을 import하기 위한 부분을 제외하면 이 파일의 내용은 여러분이 절대로 고치면 안 돼요!


# --------------------------------------------------------
# 여러분의 모듈을 import하기 위한 부분
#

# TODO#3: 방금 바꾼 파일 이름을 아래의 hw3_mymodule 자리에 바꾸어 적어 주세요.
#         TODO#4는 여기서 약 20줄 아래에 적혀 있어요.

import hw3_son

modules = [hw3_son]







# --------------------------------------------------------
# 주의: 이 아래 내용은 절대로 고치면 안 돼요!



# 여기에는 여러분이 과제#2에서 제출했던 '내 캐릭터' 정보들이 담겨 있어요.
# 주: 여기 적혀 있는 순서는 최종 결투에 전혀 영향을 주지 않으니 걱정 안 해도 돼요.
#
# TODO#4: 내 캐릭터가 싸우게 될 상대방들이 대강 어떻게 생겨먹었나 구경해 보면서
#         혹시 내 캐릭터 이름이 바뀌지는 않았나도 확인해 보세요.
#         (오늘 이전에 제출하지 않은 친구들 자리는 강사가 임의로 이름과 능력치를 정해 채워 두었어요)
#         TODO#5는 옆 파일의 duel() 안에 적혀 있어요.
stats = [
    ['Cloud', 101, 101, 101, 101, 101, -405],
    ['kimsuhanmugeobukiwadoroomi', 0, 0, 0, 50, 0, 50 ],
    ['Kermit', 100, 0, 0, 0, 0, 0 ],
    ['CatNote', 100, 0, 0, 0, 0, 0 ],
    ['Untitled_3', 0, 100, 0, 0, 0, 0 ],
    ['Jaina', 0, 0, 0, 0, 100, 0 ],
    ['SunBBangIsDab', -100, 600, -100, -100, -100, -100],
    ['Untitled_1', 15, 20, 10, 15, 30, 10 ],
    ['_1', 59, 9, 9, 9, 9, 5 ],
    ['legotechnic', 20, 20, 20, 20, 20, 0],
    ['zzzzzzzzzzzzzzzzzzzzzzzz', 0, 0, 0, 0, 1, 99],
    ['hotdog', 0, 0, 0 , 100, 0 , 0 ],
    ['백남 김연준', 0, 100, 0, 0, 0, 0 ],
    ['JBean', 20, 20, 20, 20, 10, 10 ],
    ['오작동하는 치유로봇', -100, 70, 70, 20, 0, 40 ],
    ['kimj', 2018008159, 990701, 73313920, -(2018008159+990701), -73313920, 100 ],
    ['Zi존검Sa1234', 100 , 0, 0, 0, 0, 0 ], 
    ['지식의 고대정령', 0, 0, 0, 100, 0, 0 ],
    ['CHODH', 0, 0, 0, 100, 0, 0 ],
    ['Racin', 3, 30, 2, 10, 51, 4 ],
    ['~*Zi존_SSM바귀S2*~', 0, 0, 0, 0, 0, 100 ],
    ['Fbomber', 100, 0, 0, 0, 0, 0],
    ['TLEO', 101, -1, 0, 0, 0, 0 ],
    ['FAKER', 2147483647, -2147483647 , 2147483647, -2147483647, 2147483647, -2147483547],
    ['Yujin', 50, 50, 0, 0, 0, 0 ],
    ['spring', 100, 0, 0, 0, 0, 0 ],
    ['slide', 23, 27, 20, 10, 10, 10 ],
    ['A_1', 100, 0, 0, 0, 0,0 ],
    ['Winner', 0, 0, 50, 0, 50, 0],
    ['LJB', 100, 0, 0, 0, 0, 0 ],
    ['sskys', 40, 60, 0, 0, 0, 0 ],
    ['A_0', 0, 0, 0, 0, 0, 100 ],
    ['ExoDIa', 30, 25, 20, 15, 10, 0 ],
    ['sexyback',0 ,0 , 0, 0, 0,100 ],
    ['Winwin', 0, 0, 0, 0, 0, 100 ],
    ['_0', 16, 17, 16, 17, 17, 17 ],
    ['SON', 0, 100, 0, 0, 0, 0 ],
    ['2018009234컴퓨터소프트웨어학부한관희', 3, 85, 4, 5, 3, 0 ],
    ['kingwangzzang', 10,20,30,15,15,10 ],
    ['QueueCafeGoodTaste', 0, 0, 100, 0, 0, 0 ],
    ['hitchhiker', 42, -42, 42, -42, 50, 50],
    ['wjdalsskt', 50, 50, 0, 0, 0, 0 ],
    ['김지효123', 0, 0, 0, 0, 0, 100 ],
    ['asdfwder', 100, 0, 0, 0, 0, 0 ],
    ['This_Name_Is_Win', 4, 8, 6, 12, 27, 43 ],
    ['힘몰빵광전사',70 ,0, 30, 0, 0, 0 ],
    ['minguujjjang', 100, 0, 0, 0, 0, 0 ],
    ['WINNER_made_by_Whi-soo_Kim_Serial_No.2018008240', 0, 0, 0, 100, 0, 0 ],
    ['숨니', 0, 0, 0, 0, 0, 100 ],
    ['호롤롤로', 10, 10, 10, 10, 20, 40 ],
    ['winner', 100, 0, 0, 0,0, 0],
    ['0', 100, 0, 0, 0, 0, 0 ],
    ['Hero', 30, 20, 15, 10, 15, 10 ],
    ['1_0', 0, 0, 0, 0, 50, 50 ],
    ['Soyeong', 0, 100, 0, 0, 0, 0 ],
    ['MyShinhan', 0, 66, 34, 0, 0, 0 ],
    ['한다면 하는 남자 줄여서 한남주호', -200000000, -200000000, -200000000, -200000000, -200000000, 1000000100],
    ['jipgagosipa', 100, 0, 0, 0, 0, 0 ],
    ['tong', 0, 0, 0, 100, 0, 0 ],
    ['SangYeop',30, 10, 20, 20, 10, 10],
    ['revsic', 100, 0, 0, 0, 0, 0 ],
    ['박현준', 100, 0, 0, 0, 0, 0 ],
    ['KHJ',13, 37, 23, 3, 17, 7],
    ['양승민', 100,0, 0, 0, 0, 0 ],
    ['HSY', 10, 25, 15, 20, 20, 10 ],
    ['~', 17, 17,  17, 17, 16, 16],
    [ 'VeryHardTanker', 0, 0, 100, 0, 0, 0 ],
    ['charmingpeacemaker', 0, 0, 0, 0, 0, 100 ],
    ['yeon', 1, 0 , 0, 0 , 1, 98 ],
    ['verygood', 100, 0, 0, 0, 0, 0 ],
    ['트와이스모모', 10, 10, 10, 10, 10, 50 ],
    ['MasterMasterChickenMaster', 17, 7, 19, 13, 43, 1 ],
    ['Untitled_0', 0, 100, 0, 0, 0, 0 ],
    ['mylifesodope', 16, 16, 17, 17, 17, 17],
    ['YuTaejeong', 10, 10, 10, 30, 20, 20],
    ['miae', 0, 0, 0, 0, 0, 100 ],
    ['X', 17, 17, 17, 17, 16, 16 ],
    ['데카', 100, 0, 0, 0, 0, 0 ],
    ['jujak', 10, 20, 30, 20, 10, 10 ],
    ['Jeongee',100, 0 , 0, 0, 0, 0 ],
    ['Wu', 7, 11, 17, 23, 37, 5 ],
    ['ik', 0, 100, 0, 0, 0, 0 ],
    ['Munchkin', 100, 0, 0, 0, 0, 0 ],
    ['Vegetable', 20, 10, 20, 10, 20, 20 ],
    ['all_strength_fighter', 80, 4, 4, 4, 4, 4 ],
    [' Winner', 0, 0, 0, 100, 0, 0 ],
    ['Martin', 0, 0, 0, 0, 0, 100 ],
    ['Moonfox', 100, 0, 0, 0, 0, 0 ],
    ['galaxy', 64, 7, 7, 11, 11, 0 ],
    ['Naruto', 100, 0, 0, 0, 0, 0 ],
    ['TEN', 0, 100, 0, 0, 0, 0 ],
    ['nerogit_d0hyeon', 3, 5, 7, 11, 31, 43],
    ['Monkey', 45,10, 8,7 ,3 ,27 ],
    ['SW', 0, 0, 0, 100, 0, 0 ],
    ['SuperSangwon', 100, 0, 0, 0, 0, 0],
    ['1_1', 0, 0, 0, 0, 0, 100 ],
    ["SuperFantastic", 10, 20, 30, 40, 50, -50],
    ['~~~~~~', -2147483614, 2147483647, -2147483614, 2147483647, -2147483613, 2147483647 ],
    ['Sheila', 0, 0, 0, 0, 0, 100 ],
    ['saba', 0, 0, 0, 0, 100, 0 ],
    ['wlstmddjs', 0, 0, 0, 0, 100, 0 ],
    ['Untitled_2', 0, 100, 0, 0, 0, 0 ],
    ['레드불갓갓', 4, 2, 44, 35, 7, 8 ],
    ['Hoon', 11, 13, 13, 17, 17, 29 ],
    ['Fresh_water', 0, 0, 50, 50, 0, 0 ],
    ['djlim', 16, 16, 16, 16, 16, 20 ],
    ['Potato', 0, 0, 0, 0, 0, 100],
    ['blakerlee', 0, 0, 0, 0, 0, 100 ],
    ['cocoju', 100, 0, 0, 0, 0, 0 ],
    ['ya', 20, 20, 15, 15, 15, 15 ],
    ['SSSGOD', 0, 100, 0, 0, 0, 0 ],
    ['Nuclear Missile',35,20,10,10,15,10]
    ]






# 제출 전 테스트에서 random 모듈을 사용하여 샘플링, 셔플링을 수행하고 있어요.
import random

# 모듈 모아 테스트에서 time 모듈을 사용하여 모듈별 대결 시간을 재고 있어요.
import time

# 전체 테스트 흐름을 구성하는 함수
def test():
    print '-------------------------------'
    print '     과제#3 테스트 프로그램'
    print '-------------------------------'
    print '탑재된 모듈(총 ' + str(len(modules)) + '개):'
    for module in modules:
        # ☆ 모듈들마다 이름 사전에 등재되어 있는 __name__에는 각 모듈의 '진짜 이름'이 담겨 있어요.
        print '    ' + module.__name__
    print '-------------------------------'

    while True:
        print
        print '테스트 옵션:'
        print '1. 제출 전 테스트(여기서 \'제출 가능!\' 뜨면 제출 가능)'
        print '2. 모듈 모아 테스트(내 캐릭터가 평균 몇 등 뜨는지 확인)'
        print '3. 대결 결과 조회(어떤 모듈이 순위를 어떻게 매기는지 확인)'
        print '4. 테스트 종료'
        choice = raw_input('선택하세요>')

        if choice == '1':
            choice = test_forSubmit
            # break문은 현재 진행중인 반복문의 실행을 중단해요.
            break
        elif choice == '2':
            choice = test_forPlay
            # break문은 현재 진행중인 반복문의 실행을 중단해요.
            break
        elif choice == '3':
            choice = test_forProof
            # break문은 현재 진행중인 반복문의 실행을 중단해요.
            break
        elif choice == '4':
            print '테스트 프로그램을 종료합니다.'
            # return문은 현재 진행중인 함수의 실행을 중단해요. ('값 던져주기'도 하면서)
            return
        
        print '입력이 유효하지 않습니다.'

    # 반복문의 실행이 끝났는데 아직 함수의 실행이 끝나지 않았다면
    # choice에는 반드시 테스트용 함수가 담겨 있어요.
    print
    choice()


# 과제 제출 전에 내 모듈이 올바르게 동작하고 있는지 테스트하는 함수
def test_forSubmit():
    print '제출 전 테스트 시작.'

    while True:
        print
        print '테스트할 모듈 선택:'
        
        for idx_module in xrange(len(modules)):
            print str(idx_module) + '. ' + modules[idx_module].__name__
            
        choice = raw_input('숫자를 입력하세요(그냥 엔터 치면 0번 골라줌)>')

        if choice == '':
            choice = 0
        else:
            choice = int(choice)

        if choice >= 0 and choice < len(modules):
            module = modules[idx_module]
            break

        # 반복문의 실행이 중단되지 않았다면 위의 if문 조건을 만족하지 않음(잘못 입력)을 의미해요.
        print '입력이 유효하지 않습니다.'


    print
    print '1차 테스트: 두 캐릭터간 대결을 일관성 있게 수행하는지 검사합니다. (총 ' + str(len(stats) * (len(stats) - 1)) + '회 수행)'
    raw_input('시작하려면 엔터 키를 쳐요>')


    # 캐릭터를 하나씩 집고...
    for stat_from in stats:
        copied_from = stat_from[:]

        if check(stat_from) == False:
            print '어? 캐릭터 정보가 규칙에 안 맞는게 끼어 있어요.'
            print '여러분이 수정한 게 아니면 강사에게 꼭 알려 주세요.'
            print '적발된 캐릭터 이름: ' + str(stat_from[0])
            return

        print stat_from[0] + ' vs 다른 캐릭터들. . .',

        # 또 캐릭터를 하나씩 집고...
        for stat_to in stats:
            # ...나서 보니 양손에 든 캐릭터가 동일하면 이번 반복 내용물을 스킵해요.
            if stat_from is stat_to:
                continue
            
            copied_to = stat_to[:]

            # duel(from, to) 수행
            result_from = module.duel(copied_from, copied_to)

            # 이 케이스는 return문을 만나지 못한 채 duel()이 끝나버렸을 가능성이 높아요.
            if result_from == None:
                print '실패!'
                print 'duel()이 결과를 return하지 않았습니다.'
                # 그냥 str(능력치) 하면 한국어가 깨져서 이렇게 구성해 두었어용
                print ' left: ' + str(stat_from[0]) + ', ' + str(stat_from[1:])
                print 'right: ' + str(stat_to[0]) + ', ' + str(stat_to[1:])
                print '강사의 예측: 분기가 새는 것 같아요. else부분을 붙여야 하는데 안 붙였거나 들여쓰기가 밀려 있지 않는지 확인해 주세요.'
                return

            # 이 케이스는 음수 유저와 싸우다가 가끔 걸릴 수 있어요.
            if type(result_from) != int or result_from == 0:
                print '실패!'
                print 'duel()이 규칙에 맞지 않는 값을 return했습니다. 0이 아닌 int 형식 값을 return해야 해요!'
                # 그냥 str(능력치) 하면 한국어가 깨져서 이렇게 구성해 두었어용
                print ' left: ' + str(stat_from[0]) + ', ' + str(stat_from[1:])
                print 'right: ' + str(stat_to[0]) + ', ' + str(stat_to[1:])
                print 'return값: ' + str(result_from) + ' (' + str(type(result_from)) + ' 형식)'
                print '강사의 예측: 음수 유저와 싸우다 long 형식 값을 return했을 가능성(이건 지금은 잡기 어려워요),'
                print '             수학적인 방법을 사용하다 float 형식 값을 그대로 return했을 가능성,'
                print '             또는 실수로 이름(str 형식 값)을 return했을 가능성이 존재할 수 있어요.'
                print '             return int(result)와 같이 명백하게 int 형식 값을 return하도록 수식을 구성해 주면 보통은 문제가 풀릴 거예요.'
                return
                
            # 이 케이스는 실수로 할당문을 실행해버렸거나 해서 캐릭터 정보를 변경하면 걸려요.
            if stat_from != copied_from:
                print '실패!'
                print 'duel()이 left 능력치 값을 변경했습니다.'
                # 그냥 str(능력치) 하면 한국어가 깨져서 이렇게 구성해 두었어용
                print '호출 전 left: ' + str(stat_from[0]) + ', ' + str(stat_from[1:])
                print '호출 후 left: ' + str(copied_from[0]) + ', ' + str(copied_from[1:])
                print '강사의 예측: 6주차 실습에 나온 slicing 등을 사용하여 능력치 정보의 사본을 만들어 계산에 활용해 주세요.'
                return

            # 이 케이스도, 실수로 할당문을 실행해버렸거나 해서 캐릭터 정보를 변경하면 걸려요.
            if stat_to != copied_to:
                print '실패!'
                print 'duel()이 right 능력치 값을 변경했습니다.'
                # 그냥 str(능력치) 하면 한국어가 깨져서 이렇게 구성해 두었어용
                print '호출 전 right: ' + str(stat_to[0]) + ', ' + str(stat_to[1:])
                print '호출 후 right: ' + str(copied_to[0]) + ', ' + str(copied_to[1:])
                print '강사의 예측: 6주차 실습에 나온 slicing 등을 사용하여 능력치 정보의 사본을 만들어 계산에 활용해 주세요.'
                return


            # duel(to, from) 수행
            result_to = module.duel(copied_to, copied_from)

            if result_to == None:
                print '실패!'
                print 'duel()이 결과를 return하지 않았습니다.'
                # 그냥 str(능력치) 하면 한국어가 깨져서 이렇게 구성해 두었어용
                print ' left: ' + str(stat_to[0]) + ', ' + str(stat_to[1:])
                print 'right: ' + str(stat_from[0]) + ', ' + str(stat_from[1:])
                print '강사의 예측: 분기가 새는 것 같아요. else부분을 붙여야 하는데 안 붙였거나 들여쓰기가 밀려 있지 않는지 확인해 주세요.'
                return

            if type(result_to) != int or result_to == 0:
                print '실패!'
                print 'duel()이 규칙에 맞지 않는 값을 return했습니다. 0이 아닌 int 형식 값을 return해야 해요!'
                # 그냥 str(능력치) 하면 한국어가 깨져서 이렇게 구성해 두었어용
                print ' left: ' + str(stat_to[0]) + ', ' + str(stat_to[1:])
                print 'right: ' + str(stat_from[0]) + ', ' + str(stat_from[1:])
                print 'return값: ' + str(result_to) + ' (' + str(type(result_to)) + ' 형식)'
                print '강사의 예측: 음수 유저와 싸우다 long 형식 값을 return했을 가능성(이건 지금은 잡기 어려워요),'
                print '             수학적인 방법을 사용하다 float 형식 값을 그대로 return했을 가능성,'
                print '             또는 실수로 이름(str 형식 값)을 return했을 가능성이 존재할 수 있어요.'
                print '             return int(result)와 같이 명백하게 int 형식 값을 return하도록 수식을 구성해 주면 보통은 문제가 풀릴 거예요.'
                return
            
            if stat_to != copied_to:
                print '실패!'
                print 'duel()이 left 능력치 값을 변경했습니다.'
                # 그냥 str(능력치) 하면 한국어가 깨져서 이렇게 구성해 두었어용
                print '호출 전 left: ' + str(stat_to[0]) + ', ' + str(stat_to[1:])
                print '호출 후 left: ' + str(copied_to[0]) + ', ' + str(copied_to[1:])
                print '강사의 예측: 6주차 실습에 나온 slicing 등을 사용하여 능력치 정보의 사본을 만들어 계산에 활용해 주세요.'
                return
            
            if stat_from != copied_from:
                print '실패!'
                print 'duel()이 right 능력치 값을 변경했습니다.'
                # 그냥 str(능력치) 하면 한국어가 깨져서 이렇게 구성해 두었어용
                print '호출 전 right: ' + str(stat_from[0]) + ', ' + str(stat_from[1:])
                print '호출 후 right: ' + str(copied_from[0]) + ', ' + str(copied_from[1:])
                print '강사의 예측: 6주차 실습에 나온 slicing 등을 사용하여 능력치 정보의 사본을 만들어 계산에 활용해 주세요.'
                return


            # duel(from, to)와 duel(to, from)은 결과가 서로 대칭이어야 해요.
            # 우리가 제출한 캐릭터 정보들은 모두 다 다르므로(적어도 이름은 다 다름) 무승부는 절대 일어나지 않아요!
            # 따라서 이 케이스에 해당한다는 것은 이겼는데 패배에 해당하는 분기에 진입했거나 했을 가능성이 높아요.
            if result_from * result_to >= 0:
                print '실패!'
                print 'duel()의 return값이 일관적이지 않습니다.'
                # 그냥 str(능력치) 하면 한국어가 깨져서 이렇게 구성해 두었어용
                print ' left: ' + str(stat_from[0]) + ', ' + str(stat_from[1:])
                print 'right: ' + str(stat_to[0]) + ', ' + str(stat_to[1:])
                print 'duel(left, right) 결과: ' + str(result_from)
                print 'duel(right, left) 결과: ' + str(result_to)
                print '--> 둘 중 하나는 음수, 하나는 양수가 나와야만 해요!'
                print '강사의 예측: 승리/패배 중 한 쪽에 해당하는 분기에서 적절한 return문을 실행해서 함수를 끝내버려야 하는데 그렇지 않았을 가능성이 있어요. return문이 적재적소에 마련되어 있나 확인해 주세요.'
                return
                
        print '완벽!'

    print '1차 테스트 통과!'



    print
    print '2차 테스트: 캐릭터 10명을 뽑아 임의의 순서로 나열해 놓고 대결시켰을 때'
    print '           언제나 동일한 결과가 나오나 확인합니다. (10샘플, 샘플당 20게임 수행)'
    raw_input('시작하려면 엔터 키를 쳐요>')

    # 총 10번 샘플링 수행
    for count_sample in xrange(10):
        print str(count_sample) + '번째 샘플. . .',

        # 각 샘플마다 검사용 원본을 먼저 만들어 두어요.

        # ☆ random.sample()은 시퀀스에서 주어진 수만큼 값을 꺼내 담은 새로운 list를 return해요.
        stats_selected = random.sample(stats, 10)

        # 이 부분이 실제 '게임'을 진행하는 부분이에요.
        # ☆ list.sort()는 주어진 함수를 가지고 list의 내용을 쫙 줄세우기해요.
        #    list.sort()의 동작 방법 자체는 2학년때 배우고,
        #    sum()이 그랬듯, Python에서는 이렇게 미리 만들어진 함수 쓰는게 무조건 더 빨라요.
        result_origin = stats_selected[:]
        result_origin.sort(module.duel)

        # 원본은 특별히, 능력치가 같은 캐릭터들이 결과 list에서 서로 이웃하고 있는지 추가로 확인해요.
        # 능력치가 다르다면 반드시 능력치만 가지고 승부를 내야 하는데,
        # 이 규칙을 지키지 않았다면 이 부분에서 걸리게 돼요.
        #
        # 주: 이 부분은 지금 당장은 납득하기 어려울 수 있으니 안 읽는 것을 추천해요(주석 달기엔 너무 꼬여 있음).
        idx_from = 0
        
        while idx_from < 9:
            isDifferentStatFound = False

            for idx_to in xrange(idx_from + 1, 10):
                if isSameStat(result_origin[idx_from], result_origin[idx_to]):
                    if isDifferentStatFound:
                        print '실패!'
                        print '능력치가 동일한 캐릭터들이 비슷한 등수를 차지하지 못했습니다.'
                        for idx in xrange(10):
                            # 그냥 str(능력치) 하면 한국어가 깨져서 이렇게 구성해 두었어용
                            print str(idx) + '등: ' + str(result_origin[idx][0]) + ', ' + str(result_origin[idx][1:])
                        print '여기서 ' + str(idx_from) + '등과 ' + str(idx_to) + '등 사이에 다른 능력치를 가진 캐릭터가 끼어 있어요.'
                        print '강사의 예측: 능력치가 다름에도 불구하고 이름을 가지고 승부를 냈을 가능성이 있어요. 여섯 능력치를 모두 잘 검사하고 있나 확인해 주세요.'
                        return

                    idx_from = idx_to
                else:
                    isDifferentStatFound = True

            idx_from += 1
            

        # 샘플의 순서를 섞어가며 총 20게임을 진행해요(검사용 원본 게임을 방금 했으니 19번만 더 하면 됨)
        for count_game in xrange(19):

            # ☆ random.shuffle()은 주어진 list의 순서를 마구 섞어요.
            new_selected = stats_selected[:]
            random.shuffle(new_selected)
            
            # 이 부분이 실제 '게임'을 진행하는 부분이에요.
            # ☆ list.sort()는 주어진 함수를 가지고 list의 내용을 쫙 줄세우기해요.
            #    list.sort()의 동작 방법 자체는 2학년때 배우고,
            #    sum()이 그랬듯, Python에서는 이렇게 미리 만들어진 함수 쓰는게 무조건 더 빨라요.
            result_new = new_selected[:]
            result_new.sort(module.duel)

            # 셔플 후 다시 게임을 진행해도 원본과 동일한 결과가 나와야 해요!
            if result_origin != result_new:
                print '실패!'
                print '게임 결과가 일관적이지 않습니다.'
                print ' 0번 게임 전: [ ',
                for stat in stats_selected:
                    print stat[0],
                print ']'
                print ' 0번 게임 후: [ ',
                for stat in result_origin:
                    print stat[0],
                print ']'
                print '이번 게임 전: [ ',
                for stat in new_selected:
                    print stat[0],
                print ']'
                print '이번 게임 후: [ ',
                for stat in result_new:
                    print stat[0],
                print ']'
                print '--> 동일 샘플에 대해서는 나열 순서가 달라도 언제나 동일한 결과를 내야 해요.'
                print '강사의 예측: 이름 비교를 할 때 단순히 이름 길이만 가지고 승부를 냈다면 여기서 걸릴 수 있어요. 이름 길이가 같을 때에는 각 이름 글자들을 감안해서라도 정확히 승부를 매겨야 해요.'
                return

        print '완벽!'

    print '2차 테스트 통과!'



    print
    print '최종 테스트: 모든 캐릭터 정보를 임의의 순서로 나열해 놓고 대결시켰을 때'
    print '            언제나 동일한 결과가 나오나 확인합니다. (20게임 수행)'
    raw_input('시작하려면 엔터 키를 쳐요>')

    # 매 게임마다 전체 캐릭터 목록을 셔플하며 게임을 진행해요.

    print '0번째 게임. . .',
    
    # 일단 첫 게임은 검사용 원본이에요.
    result_origin = stats[:]
    random.shuffle(result_origin)
    result_origin.sort(module.duel)

    # 원본은 특별히, 능력치가 같은 캐릭터들이 결과 list에서 서로 이웃하고 있는지 추가로 확인해요.
    # 능력치가 다르다면 반드시 능력치만 가지고 승부를 내야 하는데,
    # 이 규칙을 지키지 않았다면 이 부분에서 걸리게 돼요.
    #
    # 주: 이 부분은 지금 당장은 납득하기 어려울 수 있으니 안 읽는 것을 추천해요(주석 달기엔 너무 꼬여 있음).
    idx_from = 0
    
    while idx_from < len(stats) - 1:
        isDifferentStatFound = False

        for idx_to in xrange(idx_from + 1, len(stats)):
            if isSameStat(result_origin[idx_from],result_origin[idx_to]):
                if isDifferentStatFound:
                    print '실패!'
                    print '능력치가 동일한 캐릭터들이 비슷한 등수를 차지하지 못했습니다.'
                    for idx in xrange(idx_from, idx_to + 1):
                        # 그냥 str(능력치) 하면 한국어가 깨져서 이렇게 구성해 두었어용
                        print str(idx) + '등: ' + str(result_origin[idx][0]) + ', ' + str(result_origin[idx][1:])
                    print '여기서 ' + str(idx_from) + '등과 ' + str(idx_to) + '등 사이에 다른 능력치를 가진 캐릭터가 끼어 있어요.'
                    print '강사의 예측: 능력치가 다름에도 불구하고 이름을 가지고 승부를 냈을 가능성이 있어요. 여섯 능력치를 모두 잘 검사하고 있나 확인해 주세요.'
                    return

                idx_from = idx_to
            else:
                isDifferentStatFound = True

        idx_from += 1

    print '완벽!'
    
    # 순서를 섞어가며 총 20게임을 진행해요(검사용 원본 게임을 방금 했으니 19번만 더 하면 됨)
    for count_game in xrange(1, 20):
        print str(count_game) + '번째 게임. . .',
        
        result_new = stats[:]
        random.shuffle(result_new)
        result_new.sort(module.duel)
        
        # 셔플 후 다시 게임을 진행해도 원본과 동일한 결과가 나와야 해요!
        if result_origin != result_new:
            print '실패!'
            print '게임 결과가 일관적이지 않습니다.'
            print '오류 내용을 출력하기에는 너무 Data가 많으니, 2차 테스트를 몇 번 더 수행해 보는 것이 좋겠어요.'
            print '--> 나열 순서가 달라도 언제나 동일한 결과를 내야 해요.'
            print '강사의 예측: 이름 비교를 할 때 단순히 이름 길이만 가지고 승부를 냈다면 여기서 걸릴 수 있어요. 이름 길이가 같을 때에는 각 이름 글자들을 감안해서라도 정확히 승부를 매겨야 해요.'
            return

        print '완벽!'


    print '최종 테스트 통과!'

    # 최종 테스트까지 전부 통과하면 과제 성공이에요!
    print '제출 가능!'
    


# 여러 모듈을 모은 다음 실행하면 내 캐릭터가 평균 몇 등을 기록하는지 확인할 수 있는 함수
# 친구들이 만든 모듈을 가져와서 등록하면 친선전을 해 볼 수 있어요!
#
# 주: 이 함수 안에는 우리가 안 배운 것들이 가득 들어 있으니 안 읽는 것을 권장해요.
def test_forPlay():
    print '모듈 모아 테스트 시작.'
    print '주의: 일단 각 모듈들에 대해 제출 전 테스트를 돌려보고 오는 게 좋아요.'
    print '      테스트에 통과하지 않은 모듈을 섞어 쓰는 경우 결과가 이상하게 나올 수 있어요!'
    print

    # ☆ 빈 사전을 하나 준비했어요.
    scores = {}

    # ☆ 사전에 캐릭터 이름들을 등재하면서, 그 옆 칸은 전부 0을 담고 있어요.
    for stat in stats:
        scores[stat[0]] = 0

    # 모듈 list에서 모듈을 하나씩 꺼내서 게임을 진행해요.    
    for module in modules:
        print module.__name__ + '.duel()을 사용하여 게임 진행. . .',

        copied_stats = stats[:]

        # 줄세우기를 진행하고, 걸리는 시간을 재요.
        startTime = time.clock()
        copied_stats.sort(module.duel)
        elapsedTime = time.clock() - startTime

        # ☆ 여기를 읽고 있다니... 그러면 아래 코드에 대한 주석 설명 읽기도 한 번 도전해 봐요.
        #
        #    이 아래 코드의 목적은 각 캐릭터의 등수를 확인해서 scores 사전을 갱신하는 거예요.
        #    이 때, 예를 들어 3, 4, 5등이 동일한 능력치를 가지고 있다면 셋 다 '공동 3등'으로 간주해 주려 해요.

        # 일단 0등부터 확인 시작
        idx_from = 0
        
        while idx_from < len(stats):
            # 이번 등수 값을 빽껍해 둠
            idx_from_backup = idx_from

            # ☆ 일단 이 캐릭터의 등수는 고정이므로 바로 사전 갱신
            scores[copied_stats[idx_from][0]] += idx_from

            # 이제 이 캐릭터와 동일한 능력치를 가진 다른 캐릭터가 존재하는지 확인
            # (제출 전 테스트를 통과했다면 능력치가 같은 캐릭터들은 반드시 한 곳에 몰려 있어요)
            for idx_to in xrange(idx_from + 1, len(stats)):
                # 다른 능력치를 가진 캐릭터를 발견하면 반복 중단
                if not isSameStat(copied_stats[idx_from], copied_stats[idx_to]):
                    break

                # 반복이 중단되지 않았다는 것은 얘 능력치도 동일하다는 의미이므로 위에 빽껍해 둔 등수 값을 가지고 사전 갱신
                scores[copied_stats[idx_to][0]] += idx_from_backup

                # 방금 얘의 갱신을 끝냈으므로 다음에 또 얘를 다루지 않도록 idx 값을 보정해 둠
                idx_from = idx_to

            # 종종 봐 왔던 '다음 반복 준비' 부분
            idx_from += 1

        print '끝! - {0:13.10f}초 걸림!'.format(elapsedTime)

    print
    print '합산 결과:'
    
    # ☆ dict.items()는 사전에 등재된 각 항목들을 [(왼쪽0, 오른쪽0), (왼쪽1, 오른쪽1), ...]과 같은 느낌으로 담아서 제공해요.
    result = scores.items()

    # ☆ 끝판왕 연산자 lambda를 써서 list 줄세우기의 대결 조건을 정하고 있어요.
    #    여기엔 강사의 덕심이 강하게 반영되어 있으니 설명을 듣고 싶은 친구들은 갠톡 ㄱㄱ해 주세요.
    result.sort(lambda left, right: left[1] - right[1])

    # ☆ 보다 깔끔하게 통계 결과를 보여줄 수 있도록 str.format()을 쓰고 있어요.
    #    이건 지금 당장 살펴 보기에는 좀 많이 번거로우니 후반부를 기약해 봅시다.
    for idx in xrange(len(stats)):
        print '{0:3}등({1:5}점): {2}'.format(idx, result[idx][1], result[idx][0])
        

# 이 함수를 통해 어떤 모듈이 각 캐릭터를 정확히 몇 등으로 간주하는지 확인해 볼 수 있어요.
#
# 주: 이 함수는 비교적 간단하게 구성해 두었으니 읽을만 할 거예요.
def test_forProof():
    print '대결 결과 조회 시작.'
    print '주의: 일단 조회할 모듈에 대해 제출 전 테스트를 돌려보고 오는 게 좋아요.'
    print '      테스트에 통과하지 않은 모듈을 쓰는 경우 결과가 이상하게 나올 수 있어요!'
    print

    # 대결 결과 조회는 한 번 실행할 때 여러 모듈을 한 번씩 돌려보고 싶을 가능성이 있으므로
    # 전체 내용을 큰 반복문으로 감싸 두었어요(다 끝나고 0 누르면 재선택 가능)
    while True:
        
        while True:
            print
            print '조회할 모듈 선택:'
            
            for idx_module in xrange(len(modules)):
                print str(idx_module) + '. ' + modules[idx_module].__name__
                
            choice = raw_input('숫자를 입력하세요(그냥 엔터 치면 0번 골라줌)>')

            if choice == '':
                choice = 0
            else:
                choice = int(choice)

            if choice >= 0 and choice < len(modules):
                module = modules[idx_module]
                break

            print '입력이 유효하지 않습니다.'

        # ☆ 결과 출력할 때 이름만 볼 지 능력치도 같이 볼 지 결정
        #    이건 지금 당장 살펴 보기에는 좀 많이 번거로우니 후반부를 기약해 봅시다.
        if raw_input('각 캐릭터의 능력치를 함께 조회하려면 0을 입력하세요>') == '0':
            result_format = '{0:3}등: {1}, {2}'
        else:
            result_format = '{0:3}등: {1}'
            


        print '대결 진행. . .',
        copied_stats = stats[:]
        copied_stats.sort(module.duel)
        print '끝!'

        
        for idx in xrange(len(stats)):
            # ☆ 보다 깔끔하게 통계 결과를 보여줄 수 있도록 str.format()을 쓰고 있어요.
            #    이건 지금 당장 살펴 보기에는 좀 많이 번거로우니 후반부를 기약해 봅시다.
            print result_format.format(idx, copied_stats[idx][0], copied_stats[idx][1:])

        print
        print '주#1: Interactive mode에서도 Ctrl + F 눌러서 내 캐릭터 이름을 찾아볼 수 있어요.'
        print
        print '주#2: 테스트를 통과했다면 능력치가 동일한 캐릭터들은 항상 비슷한 등수를 갖게 되며,'
        print '      모듈 모아 테스트에서는 이들이 모두 공동 순위로 간주돼요.'
        print '      예) 3, 4, 5등이 능력치가 같다면 모두 3등으로 간주됨'
        print

        # 이번 모듈에 대한 결과 조회가 끝나고 나면 반복을 그만 둘 것인지 물어봐요.
        if raw_input('다른 모듈도 테스트해 보려면 0을 입력하세요>') != '0':
            break

# 캐릭터 정보가 규칙에 맞는지 확인하는 함수
# 1차 테스트 과정에서 살짝 돌려보고 있어요.
def check(stat):
    hab = stat[1] + stat[2] + stat[3] + stat[4] + stat[5] + stat[6]

    # 능력치 값의 형식 및 길이, 이름의 형식, 각 능력치의 형식, 능력치 합이 100인지를 모두 체크해서
    # 이들 중 하나라도 어긋나면 규칙 위반이 됨
    return type(stat) == list and len(stat) == 7 and type(stat[0]) == str and type(hab) == int and hab == 100



# 두 캐릭터의 능력치가 동일한지 여부를 return하는 함수
# 뭐하는거지 싶을 수 있는데 이 버전이 성능은 가장 좋았어요.
def isSameStat(left, right):
    # left 이름을 빽껍해 두고 left 이름 자리에 right 이름을 담음
    name_backup = left[0]
    left[0] = right[0]

    # left와 right가 모든 칸에 동일한 값을 담고 있는지 확인
    result = left == right

    # 확인이 끝나면 빽껍해 둔 left 이름을 복원
    left[0] = name_backup

    # 방금 확인했던 결과를 return
    return result


test()
