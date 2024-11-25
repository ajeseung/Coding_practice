#include"print_member.h"
#include<iostream>
#include<vector>
#include<string>
#include<stdlib.h>
using namespace std;

int main(){
	int a;
	double b;
	string c;
	cin >> a >> b>> c;
	vector<A*> objects(3);

	objects[0]=new A(a);
        objects[1]=new B(b);
        objects[2]=new C(c);
	for(int i=0; i<3;i++){
		objects[i]->print();
	}
	for(int i=0; i<3;i++){
		delete objects[i];
	}
	return 0;
}
