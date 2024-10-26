#include<iostream>
#include<vector>
#include<algorithm>
#include"integer_set.h"

using namespace std;

IntegerSet::IntegerSet(){}

IntegerSet::~IntegerSet(){}

void IntegerSet::AddNumber(int num){
	/*for(int i=0;i<numbers_.size();i++){
		if(num==numbers_.at(i)){
	                sort(numbers_.begin(),numbers_.end());
			break;
		}
		else if(num != numbers_.at(i)&&i==numbers_.size()-1){
			numbers_.push_back(num);
                        sort(numbers_.begin(),numbers_.end());
		}
	}*/
	if (find(numbers_.begin(), numbers_.end(), num) == numbers_.end()) {
		numbers_.push_back(num);
	}
        sort(numbers_.begin(), numbers_.end());
	for(int i=0;i<numbers_.size();i++){
		cout << numbers_[i]<<" ";
	}
	cout << endl;
}
void IntegerSet::DeleteNumber(int num){
	/*for(int i=0;i<numbers_.size();i++){
		if(num!=numbers_.at(i)&&i==numbers_.size()-1){
	                sort(numbers_.begin(),numbers_.end());
		}
                else if(num == numbers_.at(i)){
			numbers_.erase(numbers_.begin()+i);
			sort(numbers_.begin(),numbers_.end());
			i=numbers_.size()-1;
		}
	}*/
	if(find(numbers_.begin(),numbers_.end(),num)!=numbers_.end()){
		numbers_.erase(find(numbers_.begin(),numbers_.end(),num));
	}
        sort(numbers_.begin(), numbers_.end());
        for(int i=0;i<numbers_.size();i++){
                cout << numbers_[i]<<" ";
        }
        cout << endl;

}
int IntegerSet::GetItem(int pos)const{
	int a;
	if(pos>=numbers_.size()){
		return -1;
	}
	else{
		a= numbers_.at(pos);
		return a;
	}
}
