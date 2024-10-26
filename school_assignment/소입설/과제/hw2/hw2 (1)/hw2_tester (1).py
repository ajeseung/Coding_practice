# -*- coding: euc-kr -*-
# 소프트웨어입문설계 과제#2
# 이 모듈에는 여러분이 만든 모듈의 각 기능을 테스트해 보기 위한 함수들이 들어 있습니다.
#
# 주의: 맨 윗 문장인 import문을 제외하면, 이 모듈의 코드는 전혀 바꾸면 안 돼요!

# 과제#2는 이 모듈을 사용해서 실제 채점을 진행할 계획이에요.

import SON as me


# 이 함수는 인수로 받은 능력치가 '대결 규칙'에 맞는지 여부를 return합니다.
def check(stat):
    hab = stat[1] + stat[2] + stat[3] + stat[4] + stat[5] + stat[6]

    # 능력치 값의 형식 및 길이, 이름의 형식, 각 능력치의 형식, 능력치 합이 100인지를 모두 체크해서
    # 이들 중 하나라도 어긋나면 규칙 위반이 됨
    return type(stat) == list and len(stat) == 7 and type(stat[0]) == str and type(hab) == int and hab == 100


# 이 함수는 인수로 받은 능력치가 '대결 규칙'에 맞는지 검사하여 오류 메시지 또는 True를 return합니다.
def checkAndPrint(stat):
    if type(stat) != list:
        return '능력치 값이 list 형식이 아닙니다. 무언가 코드에 큰 문제가 생긴 것 같아요.'

    if len(stat) != 7:
        return '능력치 list의 길이가 적절하지 않습니다. 무언가 코드에 큰 문제가 생긴 것 같아요.'

    if type(stat[0]) != str:
        return '이름 값이 str 형식이 아닙니다. mystat 할당문을 확인해 주세요.'
        
    hab = stat[1] + stat[2] + stat[3] + stat[4] + stat[5] + stat[6]

    if type(hab) != int:
        return '능력치의 합이 int 형식이 아닙니다. 조금만 더 정직하게 능력치를 설정해 봅시다.'

    if hab < 100:
        return '능력치의 합이 100보다 작습니다. 이타적인 마음은 이해하지만 규칙을 준수하려면 딱 100이 되어야 해요.'

    if hab > 100:
        return '능력치의 합이 100보다 큽니다. 규칙을 준수하려면 딱 100이 되어야 해요.'

    return True
   

# 이 함수는 여러분이 만든 모듈이 잘 동작하는지 확인해 보고 싶을 때 호출하는 함수입니다.
# 물론 과제를 하는 지금 시점에는 꼭 호출해야 하기 때문에
# 지금은 F5를 누르면 무조건 호출하도록 구성해 놨어요.
#
# 주의: 이 아래에 적혀 있는 문장들은 절대 바꾸면 안 돼요!
def test():
    mystat = me.mystat
    dual = me.dual
    
    mystat_backup = mystat[:]
    enemystats_losing = []

    statnames = ['이름', 'STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']
    
    print 'mystat 테스트. . .',

    check_result = checkAndPrint(mystat)

    if check_result is True:
        print '완벽!'
    else:
        print '실패..'
        print '실패 원인: ' + check_result
        print '대결 규칙 및 코드 내 주석 설명을 다시 확인해 주세요.'
        return



    # STR-DEX, STR-CON, ... , WIS-CHA 순으로 두 능력치 쌍을 골라서 섞어 가며 테스트 상대 결정
    # 예: STR-DEX 쌍을 골랐을 때 (STR - 1, DEX + 1)부터 (0, STR + DEX)까지 테스트 진행
    # 완벽히 모든 경우를 테스트하지는 않지만, 여러분의 자잘한 분기 미스를 적절히 체크해 줄 수 있을 거예요.
    enemystat = mystat[:]
    enemystat[0] = enemystat[0] + '_1'

    isNegativeValueUser = mystat[1] < 0 or mystat[2] < 0 or mystat[3] < 0 or mystat[4] < 0 or mystat[5] < 0 or mystat[6] < 0

    print 'dual() 테스트 시작.'

    idx_from = 1

    while idx_from < 7:
        idx_to = 1

        while idx_to < 7:

            if idx_from == idx_to:
                idx_to = idx_to + 1
                continue

            # 테스트 범위 지정
            # 능력치에 음수가 포함되어 있는 경우 최대 2 x 100포인트 범위 내에서 능력치 변경(int 범위 안으로 한정)
            if isNegativeValueUser:
                max_offset = 200

                if mystat[idx_to] + max_offset > 0x7FFFFFFF:
                    max_offset = 0x7FFFFFFF - mystat[idx_to]

                if mystat[idx_from] - max_offset < -0x80000000:
                    max_offset = 0x7FFFFFFF + mystat[idx_from] + 1
            # 능력치가 전부 양수인 경우 정직하게 진행
            else:
                max_offset = mystat[idx_from]

            print '----' + statnames[idx_from] + ' -> ' + statnames[idx_to] + ' 테스트. . .',

            min_enemystat_from = mystat[idx_from] - max_offset

            enemystat[idx_from] = mystat[idx_from] - 1
            enemystat[idx_to] = mystat[idx_to] + 1



            # 1포인트씩 능력치를 옮겨 가며 테스트 진행
            while enemystat[idx_from] >= min_enemystat_from:
                enemystat_backup = enemystat[:]

                result_left = dual(mystat, enemystat)

                if result_left == None:
                    print 'dual()이 결과를 return하지 않음!'
                    print 'left : ' + str(mystat_backup)
                    print 'right: ' + str(enemystat_backup)
                    return

                if int(result_left) == 0:
                    print 'dual()이 부적절한 값을 return함!'
                    print 'left : ' + str(mystat_backup)
                    print 'right: ' + str(enemystat_backup)
                    print 'return값: ' + str(result_left)
                    return

                    
                for idx in range(7):
                    if mystat_backup[idx] != mystat[idx] or enemystat_backup[idx] != enemystat[idx]:
                        print
                        print '능력치 변경 시도 발견!'
                        print '실행 전 left : ' + str(mystat_backup)
                        print '실행 후 left : ' + str(mystat)
                        print '실행 전 right: ' + str(enemystat_backup)
                        print '실행 후 right: ' + str(enemystat)
                        return


                result_right = dual(enemystat, mystat)

                if result_right == None:
                    print 'dual()이 결과를 return하지 않음!'
                    print 'left: ' + str(enemystat_backup)
                    print 'right: ' + str(mystat_backup)
                    return
                
                if int(result_right) == 0:
                    print 'dual()이 부적절한 값을 return함!'
                    print 'left: ' + str(enemystat_backup)
                    print 'right: ' + str(mystat_backup)
                    print 'return값: ' + str(result_right)
                    return


                if int(result_left) * int(result_right) > 0:
                    print 'dual()이 일관적이지 않은 결과를 return함!'
                    print 'left : ' + str(mystat_backup)
                    print 'right: ' + str(enemystat_backup)
                    print 'return값: ' + str(result_left)
                    print 'return값(반대로 담았을 때): ' + str(result_right)
                    return
                    
                
                for idx in range(7):
                    if mystat_backup[idx] != mystat[idx] or enemystat_backup[idx] != enemystat[idx]:
                        print
                        print '능력치 변경 시도 발견!'
                        print '실행 전 left : ' + str(enemystat_backup)
                        print '실행 후 left : ' + str(enemystat)
                        print '실행 전 right: ' + str(mystat_backup)
                        print '실행 후 right: ' + str(mystat)
                        return

                
                # 다음 테스트 준비
                enemystat[idx_from] = enemystat[idx_from] - 1
                enemystat[idx_to] = enemystat[idx_to] + 1

            
            print '완벽!'
            
            enemystat[idx_to] = mystat[idx_to]
            idx_to = idx_to + 1

        enemystat[idx_from] = mystat[idx_from]
        idx_from = idx_from + 1
    
    print 'dual() 테스트 종료.'
    print '제출 가능!'
        

test()
