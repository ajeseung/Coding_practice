#include<vector>
#include<iostream>

using namespace std;

class IntegerSet{
public:
	IntegerSet();
	~IntegerSet();
	
	void AddNumber(int num);
	void DeleteNumber(int num);
	int GetItem(int pos)const;
	vector<int>GetAll() const;
private:
	vector<int>numbers_;
};

