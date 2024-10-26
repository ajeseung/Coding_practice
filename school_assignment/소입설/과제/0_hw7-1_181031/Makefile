all: sorted_array.o sorted_array_main.o integer_set.o integer_set_main.o
	g++ -o sorted_array sorted_array_main.o sorted_array.o
	g++ -o integer_set integer_set_main.o integer_set.o
sorted_array.o: sorted_array.cc
	g++ -c -o sorted_array.o sorted_array.cc
sorted_array_main.o: sorted_array_main.cc
	g++ -c -o sorted_array_main.o sorted_array_main.cc
integer_set.o: integer_set.cc
	g++ -c -o integer_set.o integer_set.cc
integer_set_main.o : integer_set_main.cc
	g++ -c -o integer_set_main.o integer_set_main.cc
clean:
	rm sorted_array sorted_array_main.o sorted_array.o integer_set integer_set_main.o integer_set.o
