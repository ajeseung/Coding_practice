# -*- coding: euc-kr -*-
# 소프트웨어입문설계 과제#2
# 이 모듈에는 여러분이 만든 모듈의 각 기능을 테스트해 보기 위한 함수들이 들어 있습니다.
#
# 주의: 맨 윗 문장인 import문을 제외하면, 이 모듈의 코드는 전혀 바꾸면 안 돼요!

import SON as me


# 이 함수는 인수로 받은 능력치가 '대결 규칙'에 맞는지 여부를 return합니다.
def check(stat):
    hab = stat[1] + stat[2] + stat[3] + stat[4] + stat[5] + stat[6]

    # 능력치 값의 형식 및 길이, 이름의 형식, 각 능력치의 형식, 능력치 합이 100인지를 모두 체크해서
    # 이들 중 하나라도 어긋나면 규칙 위반이 됨
    return type(stat) == list and len(stat) == 7 and type(stat[0]) == str and type(hab) == int and hab == 100

    

# 이 함수는 여러분이 만든 모듈이 잘 동작하는지 확인해 보고 싶을 때 호출하는 함수입니다.
# 물론 과제를 하는 지금 시점에는 꼭 호출해야 하기 때문에
# 지금은 F5를 누르면 무조건 호출하도록 구성해 놨어요.
#
# 주의: 이 아래에 적혀 있는 문장들은 절대 바꾸면 안 돼요!
def test():
    print 'mystat 테스트. . .',
    if check(me.mystat) == True:
        print '완벽!'
    else:
        print '실패..'
        print '대결 규칙 및 코드 내 주석 설명을 다시 확인해 주세요.'
        return

    # 이거 지금은 정말 끝내주게 오래 걸리긴 해요.
    # 계속 기다려 보거나,
    # 다음주에 좀 더 빠른 버전을 올려 줄게용.
    print 'dual() 테스트. . .',
    STR = 0
    enemystat = [me.mystat[0] + '_1', 0, 0, 0, 0, 0, 0]
    
    while STR <= 100:
        DEX = 0
        enemystat[2] = 0
        
        while DEX <= 100 - STR:
            CON = 0
            enemystat[3] = 0
            
            while CON <= 100 - STR - DEX:
                INT = 0
                enemystat[4] = 0
                
                while INT <= 100 - STR - DEX - CON:
                    WIS = 0
                    enemystat[5] = 0
                    
                    while WIS <= 100 - STR - DEX - CON - INT:
                        CHA = 0
                        enemystat[6] = 0
                        
                        while CHA <= 100 - STR - DEX - CON - INT - WIS:
                            mystat_backup = me.mystat[:]
                            enemystat_backup = enemystat[:]
                            result_left = me.dual(me.mystat, enemystat)

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
                                if mystat_backup[idx] != me.mystat[idx] or enemystat_backup[idx] != enemystat[idx]:
                                    print
                                    print '능력치 변경 시도 발견!'
                                    print '실행 전 left : ' + str(mystat_backup)
                                    print '실행 후 left : ' + str(me.mystat)
                                    print '실행 전 right: ' + str(enemystat_backup)
                                    print '실행 후 right: ' + str(enemystat)
                                    return

                            mystat_backup = me.mystat[:]
                            enemystat_backup = enemystat[:]
                            result_right = me.dual(enemystat, me.mystat)

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
                                if mystat_backup[idx] != me.mystat[idx] or enemystat_backup[idx] != enemystat[idx]:
                                    print
                                    print '능력치 변경 시도 발견!'
                                    print '실행 전 left : ' + str(enemystat_backup)
                                    print '실행 후 left : ' + str(enemystat)
                                    print '실행 전 right: ' + str(mystat_backup)
                                    print '실행 후 right: ' + str(me.mystat)
                                    return

                            CHA = CHA + 1
                            enemystat[6] = CHA

                        WIS = WIS + 1
                        enemystat[5] = WIS

                    INT = INT + 1
                    enemystat[4] = INT

                CON = CON + 1
                enemystat[3] = CON

            DEX = DEX + 1
            enemystat[2] = DEX

        STR = STR + 1
        enemystat[1] = STR

    print '완벽!'

    print '제출 가능!'
    
    

test()
