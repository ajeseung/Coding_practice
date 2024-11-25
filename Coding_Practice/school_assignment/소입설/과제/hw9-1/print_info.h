#ifndef __PRINT_INFO__
#define __PRINT_INFO__
#include<string>
#include<iostream>
using namespace std;
class A{
	public:
		virtual string getTypeInfo();
};
class B : public A{
	public:
		virtual string getTypeInfo();
};
class C : public B{
	public:
		virtual string getTypeInfo();
};


#endif //__PRINT_INFO__
