# -*- coding: euc-kr -*-
# ����Ʈ�����Թ����� ����#2
# �� ��⿡�� �������� ���� ����� �� ����� �׽�Ʈ�� ���� ���� �Լ����� ��� �ֽ��ϴ�.
#
# ����: �� �� ������ import���� �����ϸ�, �� ����� �ڵ�� ���� �ٲٸ� �� �ſ�!

import SON as me


# �� �Լ��� �μ��� ���� �ɷ�ġ�� '��� ��Ģ'�� �´��� ���θ� return�մϴ�.
def check(stat):
    hab = stat[1] + stat[2] + stat[3] + stat[4] + stat[5] + stat[6]

    # �ɷ�ġ ���� ���� �� ����, �̸��� ����, �� �ɷ�ġ�� ����, �ɷ�ġ ���� 100������ ��� üũ�ؼ�
    # �̵� �� �ϳ��� ��߳��� ��Ģ ������ ��
    return type(stat) == list and len(stat) == 7 and type(stat[0]) == str and type(hab) == int and hab == 100

    

# �� �Լ��� �������� ���� ����� �� �����ϴ��� Ȯ���� ���� ���� �� ȣ���ϴ� �Լ��Դϴ�.
# ���� ������ �ϴ� ���� �������� �� ȣ���ؾ� �ϱ� ������
# ������ F5�� ������ ������ ȣ���ϵ��� ������ �����.
#
# ����: �� �Ʒ��� ���� �ִ� ������� ���� �ٲٸ� �� �ſ�!
def test():
    print 'mystat �׽�Ʈ. . .',
    if check(me.mystat) == True:
        print '�Ϻ�!'
    else:
        print '����..'
        print '��� ��Ģ �� �ڵ� �� �ּ� ������ �ٽ� Ȯ���� �ּ���.'
        return

    # �̰� ������ ���� �����ְ� ���� �ɸ��� �ؿ�.
    # ��� ��ٷ� ���ų�,
    # �����ֿ� �� �� ���� ������ �÷� �ٰԿ�.
    print 'dual() �׽�Ʈ. . .',
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
                                print 'dual()�� ����� return���� ����!'
                                print 'left : ' + str(mystat_backup)
                                print 'right: ' + str(enemystat_backup)
                                return

                            if int(result_left) == 0:
                                print 'dual()�� �������� ���� return��!'
                                print 'left : ' + str(mystat_backup)
                                print 'right: ' + str(enemystat_backup)
                                print 'return��: ' + str(result_left)
                                return
                                

                            for idx in range(7):
                                if mystat_backup[idx] != me.mystat[idx] or enemystat_backup[idx] != enemystat[idx]:
                                    print
                                    print '�ɷ�ġ ���� �õ� �߰�!'
                                    print '���� �� left : ' + str(mystat_backup)
                                    print '���� �� left : ' + str(me.mystat)
                                    print '���� �� right: ' + str(enemystat_backup)
                                    print '���� �� right: ' + str(enemystat)
                                    return

                            mystat_backup = me.mystat[:]
                            enemystat_backup = enemystat[:]
                            result_right = me.dual(enemystat, me.mystat)

                            if result_right == None:
                                print 'dual()�� ����� return���� ����!'
                                print 'left: ' + str(enemystat_backup)
                                print 'right: ' + str(mystat_backup)
                                return
                            
                            if int(result_right) == 0:
                                print 'dual()�� �������� ���� return��!'
                                print 'left: ' + str(enemystat_backup)
                                print 'right: ' + str(mystat_backup)
                                print 'return��: ' + str(result_right)
                                return

                            if int(result_left) * int(result_right) > 0:
                                print 'dual()�� �ϰ������� ���� ����� return��!'
                                print 'left : ' + str(mystat_backup)
                                print 'right: ' + str(enemystat_backup)
                                print 'return��: ' + str(result_left)
                                print 'return��(�ݴ�� ����� ��): ' + str(result_right)
                                return
                                
                            
                            for idx in range(7):
                                if mystat_backup[idx] != me.mystat[idx] or enemystat_backup[idx] != enemystat[idx]:
                                    print
                                    print '�ɷ�ġ ���� �õ� �߰�!'
                                    print '���� �� left : ' + str(enemystat_backup)
                                    print '���� �� left : ' + str(enemystat)
                                    print '���� �� right: ' + str(mystat_backup)
                                    print '���� �� right: ' + str(me.mystat)
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

    print '�Ϻ�!'

    print '���� ����!'
    
    

test()
