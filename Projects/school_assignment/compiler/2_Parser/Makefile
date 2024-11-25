# Makefile for C Minus Scanner
# 
# ./lex/tiny.l
# ./yacc/tiny.y
# ./yacc/globals.h

CC = gcc

CFLAGS = -W -Wall -g

OBJS = main.o util.o lex.yy.o y.tab.o

.PHONY: all clean
all: cminus_parser

clean: 
	rm -vf cminus_parser *.o lex.yy.c y.tab.c y.tab.h y.output

cminus_parser: $(OBJS)
	$(CC) $(CFLAGS) $(OBJS) -o $@ -lfl

main.o: main.c globals.h util.h scan.h parse.h y.tab.h
	$(CC) $(CFLAGS) -c main.c

util.o: util.c globals.h util.h y.tab.h 
	$(CC) $(CFLAGS) -c util.c

scan.o: scan.c globals.h util.h scan.h y.tab.h
	$(CC) $(CFLAGS) -c scan.c

lex.yy.o: lex.yy.c scan.h util.h globals.h y.tab.h
	$(CC) $(CFLAGS) -c lex.yy.c

lex.yy.c: cminus.l
	flex cminus.l

y.tab.h: y.tab.c

y.tab.o: y.tab.c parse.h
	$(CC) $(CFLAGS) -c y.tab.c

y.tab.c: cminus.y
	yacc -d -v cminus.y