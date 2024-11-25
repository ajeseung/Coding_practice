#include"sorted_array.h"
#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

SortedArray::SortedArray(){
	
}
SortedArray::~SortedArray(){

}
void SortedArray::Addnumber(int num){
	numbers.push_back(num);
	sort(numbers.begin(),numbers.end());
}

vector<int> SortedArray::GetSortedAscending() const{
	vector<int>a(numbers);
	
	return a;
}
vector<int> SortedArray::GetSortedDescending()const{
	vector<int>b(numbers);
	sort(b.begin(),b.end(),greater<int>());
	return b;
}
int SortedArray::GetMax()const{
	int max=*max_element(numbers.begin(),numbers.end());
	return max;	
}
int SortedArray::GetMin()const{
	int min=*min_element(numbers.begin(),numbers.end());
	return min;
}
	
