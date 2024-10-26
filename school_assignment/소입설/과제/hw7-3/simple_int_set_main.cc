#include <iostream>
#include <string>
#include <stdlib.h>
#include <set>
#include "simple_int_set.h"

using namespace std;

string* split(string& str, const string& delim){
        string* string_list = new string[10];
        for(int i=0; i<10; ++i){
        string_list[i] = " ";
        }

        int idx = 0;
        size_t prev = 0, pos = 0;
        do{
                pos = str.find_first_of(delim,prev + 1);
                string_list[idx] = str.substr(prev, pos - prev);
                prev = pos + 1;
                ++idx;
        }while(pos != string::npos);
        return string_list;
}

bool ParseSet(const string& str, set<int> *s) {
	string a = str;
	string* list = split(a , " ");
	int i = 1;
	int j;
	while (list[i] != "}"){
		j = atoi(list[i].c_str());
		if(j == 0){
			if(list[i] != "0"){
				return false;
			}
		}
		else{
			s->insert(j);
			i++;
		}
	}
	return true;
}

size_t GetOperator(const string& str) {
	auto op_pos = str.find_first_of("+");
	if (op_pos == string::npos) op_pos = str.find_first_of("*");
	if (op_pos == string::npos) {
		auto temp = str.find_first_of("-");
		while (temp != string::npos && str.at(temp + 1) != ' ')
			temp = str.find_first_of("-", temp + 1);
		op_pos = temp;
	}

	return op_pos;
}

bool InputSet(set<int> *s0, set<int> *s1, string& op) {
	s0->clear(), s1->clear();

	string line;
	getline(cin, line);

	auto op_pos = GetOperator(line);

	if (op_pos == string::npos) return false;
	else op = line.at(op_pos);

	return ParseSet(line.substr(0, op_pos - 1), s0) && ParseSet(line.substr(op_pos + 2), s1);
}

void PrintSet(set<int>& s) {
	cout << "{";
	for (auto it = s.begin(); it != s.end(); ++it) cout << " " << *it;
	cout << " }" << endl;
}

int main() {
	set<int> s0, s1;
	string op;

	while (true) {
		bool valid = InputSet(&s0, &s1, op);
		if (!valid) break;

		auto res = (op == "+") ? SetUnion(s0, s1) :
					(op == "-") ? SetDifference(s0, s1) : SetIntersection(s0, s1);

		PrintSet(res);
	}
	return 0;
}
