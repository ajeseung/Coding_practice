#ifndef __PRINT_MEMBER__
#define __PRINT_MEMBER__
#include<iostream>
#include<string>

using namespace std;

class A{
	public:
		A(int A1);
		virtual	~A();
		virtual void print();
	private:
		int* memberA;
};
class B : public A{
	public:
		B(double B1);
		virtual	~B();
		virtual void print();	
	private:
		double* memberB;
};
class C : public B{
	public:
		C(string C1);
		virtual	~C();
		virtual void print();
	private:
		string* memberC;
};
#endif //__PRINT_MEMBER__
