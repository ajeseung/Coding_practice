#include <iostream>
#include <vector>
#include <string>
#include "message_book.h"

using namespace std;

int main(){
	MessageBook JMK;
	string action;
	int number;
	string message;
	while(1){
		cin >> action;
		if(action == "add"){
			cin >> number;
			cin.ignore();
			getline(cin,message);
			JMK.AddMessage(number, message);
		}
		else if(action == "delete"){
			cin >> number;
			JMK.DeleteMessage(number);
		}
		else if(action == "print"){
			cin >> number;
			cout << JMK.GetMessage(number) << endl;
		}
		else if(action == "list"){
			vector<int> key = JMK.GetNumbers();
			for (vector<int>::size_type i = 0; i < key.size(); i++){
				cout << key.at(i) << ": " << JMK.GetMessage(key.at(i)) << endl;
			}
		}
		else if(action == "quit"){
			return 0;
		}
	}
}
