# -*- coding: euc-kr -*-

def  abc():

    a = raw_input('시원한 건가요?')
    if a == '예':
        b = raw_input('단것인가요?')
        if b == '예':
            print '민트 초코칩 프라페'
        if b == '아니요':
            print '아이스 아메리카노'
    if a == '아니요':
        c = raw_input('차 종류인가요?')
        if c == '예':
            print '홍차'
        if c == '아니요':
            print '아이스 아메리카노'
abc()
                      
        
