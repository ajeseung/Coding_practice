#include<iostream>
#include<vector>
#include"integer_set.h"

using namespace std;

int main(void){
	IntegerSet i_set;
	string str;
	int num1,pos1;
	while(1){
	cin >> str;
		if(str=="quit"){
			return 0;
		}
		else{
		cin >> num1;
			if(str=="add"){
				i_set.AddNumber(num1);
			}	
			else if(str=="del"){
				i_set.DeleteNumber(num1);
			}
			else if(str=="get"){
				pos1=i_set.GetItem(num1);
				cout << pos1<< endl;
			}
		}
	}
}
