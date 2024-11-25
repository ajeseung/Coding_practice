# -*- coding: euc-kr -*-
# ����Ʈ�����Թ����� ����#2
# �� ��⿡�� �������� ���� ����� �� ����� �׽�Ʈ�� ���� ���� �Լ����� ��� �ֽ��ϴ�.
#
# ����: �� �� ������ import���� �����ϸ�, �� ����� �ڵ�� ���� �ٲٸ� �� �ſ�!

# ����#2�� �� ����� ����ؼ� ���� ä���� ������ ��ȹ�̿���.

import SON as me


# �� �Լ��� �μ��� ���� �ɷ�ġ�� '��� ��Ģ'�� �´��� ���θ� return�մϴ�.
def check(stat):
    hab = stat[1] + stat[2] + stat[3] + stat[4] + stat[5] + stat[6]

    # �ɷ�ġ ���� ���� �� ����, �̸��� ����, �� �ɷ�ġ�� ����, �ɷ�ġ ���� 100������ ��� üũ�ؼ�
    # �̵� �� �ϳ��� ��߳��� ��Ģ ������ ��
    return type(stat) == list and len(stat) == 7 and type(stat[0]) == str and type(hab) == int and hab == 100


# �� �Լ��� �μ��� ���� �ɷ�ġ�� '��� ��Ģ'�� �´��� �˻��Ͽ� ���� �޽��� �Ǵ� True�� return�մϴ�.
def checkAndPrint(stat):
    if type(stat) != list:
        return '�ɷ�ġ ���� list ������ �ƴմϴ�. ���� �ڵ忡 ū ������ ���� �� ���ƿ�.'

    if len(stat) != 7:
        return '�ɷ�ġ list�� ���̰� �������� �ʽ��ϴ�. ���� �ڵ忡 ū ������ ���� �� ���ƿ�.'

    if type(stat[0]) != str:
        return '�̸� ���� str ������ �ƴմϴ�. mystat �Ҵ繮�� Ȯ���� �ּ���.'
        
    hab = stat[1] + stat[2] + stat[3] + stat[4] + stat[5] + stat[6]

    if type(hab) != int:
        return '�ɷ�ġ�� ���� int ������ �ƴմϴ�. ���ݸ� �� �����ϰ� �ɷ�ġ�� ������ ���ô�.'

    if hab < 100:
        return '�ɷ�ġ�� ���� 100���� �۽��ϴ�. ��Ÿ���� ������ ���������� ��Ģ�� �ؼ��Ϸ��� �� 100�� �Ǿ�� �ؿ�.'

    if hab > 100:
        return '�ɷ�ġ�� ���� 100���� Ů�ϴ�. ��Ģ�� �ؼ��Ϸ��� �� 100�� �Ǿ�� �ؿ�.'

    return True
   

# �� �Լ��� �������� ���� ����� �� �����ϴ��� Ȯ���� ���� ���� �� ȣ���ϴ� �Լ��Դϴ�.
# ���� ������ �ϴ� ���� �������� �� ȣ���ؾ� �ϱ� ������
# ������ F5�� ������ ������ ȣ���ϵ��� ������ �����.
#
# ����: �� �Ʒ��� ���� �ִ� ������� ���� �ٲٸ� �� �ſ�!
def test():
    mystat = me.mystat
    dual = me.dual
    
    mystat_backup = mystat[:]
    enemystats_losing = []

    statnames = ['�̸�', 'STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']
    
    print 'mystat �׽�Ʈ. . .',

    check_result = checkAndPrint(mystat)

    if check_result is True:
        print '�Ϻ�!'
    else:
        print '����..'
        print '���� ����: ' + check_result
        print '��� ��Ģ �� �ڵ� �� �ּ� ������ �ٽ� Ȯ���� �ּ���.'
        return



    # STR-DEX, STR-CON, ... , WIS-CHA ������ �� �ɷ�ġ ���� ��� ���� ���� �׽�Ʈ ��� ����
    # ��: STR-DEX ���� ����� �� (STR - 1, DEX + 1)���� (0, STR + DEX)���� �׽�Ʈ ����
    # �Ϻ��� ��� ��츦 �׽�Ʈ������ ������, �������� ������ �б� �̽��� ������ üũ�� �� �� ���� �ſ���.
    enemystat = mystat[:]
    enemystat[0] = enemystat[0] + '_1'

    isNegativeValueUser = mystat[1] < 0 or mystat[2] < 0 or mystat[3] < 0 or mystat[4] < 0 or mystat[5] < 0 or mystat[6] < 0

    print 'dual() �׽�Ʈ ����.'

    idx_from = 1

    while idx_from < 7:
        idx_to = 1

        while idx_to < 7:

            if idx_from == idx_to:
                idx_to = idx_to + 1
                continue

            # �׽�Ʈ ���� ����
            # �ɷ�ġ�� ������ ���ԵǾ� �ִ� ��� �ִ� 2 x 100����Ʈ ���� ������ �ɷ�ġ ����(int ���� ������ ����)
            if isNegativeValueUser:
                max_offset = 200

                if mystat[idx_to] + max_offset > 0x7FFFFFFF:
                    max_offset = 0x7FFFFFFF - mystat[idx_to]

                if mystat[idx_from] - max_offset < -0x80000000:
                    max_offset = 0x7FFFFFFF + mystat[idx_from] + 1
            # �ɷ�ġ�� ���� ����� ��� �����ϰ� ����
            else:
                max_offset = mystat[idx_from]

            print '----' + statnames[idx_from] + ' -> ' + statnames[idx_to] + ' �׽�Ʈ. . .',

            min_enemystat_from = mystat[idx_from] - max_offset

            enemystat[idx_from] = mystat[idx_from] - 1
            enemystat[idx_to] = mystat[idx_to] + 1



            # 1����Ʈ�� �ɷ�ġ�� �Ű� ���� �׽�Ʈ ����
            while enemystat[idx_from] >= min_enemystat_from:
                enemystat_backup = enemystat[:]

                result_left = dual(mystat, enemystat)

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
                    if mystat_backup[idx] != mystat[idx] or enemystat_backup[idx] != enemystat[idx]:
                        print
                        print '�ɷ�ġ ���� �õ� �߰�!'
                        print '���� �� left : ' + str(mystat_backup)
                        print '���� �� left : ' + str(mystat)
                        print '���� �� right: ' + str(enemystat_backup)
                        print '���� �� right: ' + str(enemystat)
                        return


                result_right = dual(enemystat, mystat)

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
                    if mystat_backup[idx] != mystat[idx] or enemystat_backup[idx] != enemystat[idx]:
                        print
                        print '�ɷ�ġ ���� �õ� �߰�!'
                        print '���� �� left : ' + str(enemystat_backup)
                        print '���� �� left : ' + str(enemystat)
                        print '���� �� right: ' + str(mystat_backup)
                        print '���� �� right: ' + str(mystat)
                        return

                
                # ���� �׽�Ʈ �غ�
                enemystat[idx_from] = enemystat[idx_from] - 1
                enemystat[idx_to] = enemystat[idx_to] + 1

            
            print '�Ϻ�!'
            
            enemystat[idx_to] = mystat[idx_to]
            idx_to = idx_to + 1

        enemystat[idx_from] = mystat[idx_from]
        idx_from = idx_from + 1
    
    print 'dual() �׽�Ʈ ����.'
    print '���� ����!'
        

test()
