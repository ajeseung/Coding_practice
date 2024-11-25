#include <vector>
#include <string>
#include <map>
#include "message_book.h"

using namespace std;

MessageBook::MessageBook(){
	messages_.clear();
}

void MessageBook::AddMessage(int number, const string& message){
	messages_[number] = message;
}

void MessageBook::DeleteMessage(int number){
	messages_.erase(number);
}

vector<int> MessageBook::GetNumbers() const{
	vector<int> A;
	for (map<int, string>::const_iterator it = messages_.begin(); it != messages_.end(); ++it){
		A.push_back(it->first);
	}
	return A;
}

const string MessageBook::GetMessage(int number) const{
	if(messages_.find(number) == messages_.end()){
		return " ";
	}
	else{
		return messages_.find(number)->second;
	}
}
