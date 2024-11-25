CC = gcc
CFLAGS=-g -Wall
TARGET = main
OBJECTS = main.o bessj0.o bessj1.o muller.o part1.o part2.o rtbis.o rtflsp.o rtnewt.o rtsafe.o rtsec.o zbrak.o

all : $(TARGET)

$(TARGET) : $(OBJECTS)
	$(CC) -o $@ $^ -lm
  
clean : 
	rm *.o main
