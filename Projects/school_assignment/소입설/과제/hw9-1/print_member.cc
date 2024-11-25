#include"print_member.h"
#include<iostream>
#include<string>
#include<stdlib.h>
using namespace std;

A::A(int A1){
	memberA=new int;
	*memberA=A1;
	cout << "new memberA" <<endl;
}
A::~A(){
	delete memberA;
	cout << "delete memberA"<<endl;
}
void A::print(){
	cout << "*memberA "<< *memberA << endl;
}
B::B(double B1):A(1){
	memberB=new double;
	*memberB=B1;
	cout << "new memberB" <<endl;
}
B::~B(){
	delete memberB;
	cout << "delete memberB"<<endl;
}
void B::print(){
	A::print();
	cout << "*memberB "<< *memberB<<endl;	
}
C::C(string C1):B(1.1){
	memberC=new string;
	*memberC=C1;
	cout << "new memberC" << endl;
}
C::~C(){
	delete memberC;
	cout << "delete memberC" << endl;
}
void C::print(){
	B::print();
	cout << "*memberC " << *memberC<< endl;
}
