#include<iostream>
#include<vector>
#include<stdlib.h>
#include<string>
#include"sorted_array.h"

using namespace std;

int main(void){
	
	vector<int>intArr2;
	int max1,min1;
	string str;
	
	SortedArray s_array;

	while(1){
	cin >>  str;
		if(str=="ascend"){
			
			intArr2=s_array.GetSortedAscending();
			for(int i=0;i<intArr2.size();i++){
				cout<<intArr2[i]<<" ";
			}
			cout<<endl;
		}
		else if(str=="descend"){
			intArr2=s_array.GetSortedDescending();
			for(int i=0;i<(int)intArr2.size();i++){
				cout<< intArr2[i]<<" ";
			}
			cout << endl;
		}
		else if(str=="max"){
			max1=s_array.GetMax();
			cout<< max1<<endl;
		}
		else if(str=="min"){
			min1=s_array.GetMin();
			cout<< min1<< endl;
		}
		else if(str=="quit"){
			return 0;
		}
		else{
			s_array.Addnumber(atoi(str.c_str()));	
		}
		intArr2.clear();
	}
}
