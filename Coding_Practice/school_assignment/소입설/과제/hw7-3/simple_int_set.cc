#include <iostream>
#include <set>
#include "simple_int_set.h"

using namespace std;

set<int> SetIntersection(const set<int>& set0, const set<int>& set1){
	set<int> A;
	for(set<int>::iterator i = set1.begin(); i != set1.end(); i++){
		for(set<int>::iterator j = set0.begin(); j != set0.end(); j++){
			if(*i == *j){
				A.insert(*i);
			}
		}
	}
	return A;
}
set<int> SetUnion(const set<int>& set0, const set<int>& set1){
        set<int> A(set0);
        for(set<int>::iterator i = set1.begin(); i != set1.end(); i++){
                A.insert(*i);
        }
        return A;
}
set<int> SetDifference(const set<int>& set0, const set<int>& set1){
        set<int> A(set0);
        for(set<int>::iterator i = set1.begin(); i != set1.end(); i++){
                for(set<int>::iterator j = A.begin(); j != A.end(); j++){
                        if(*i == *j){
                               A.erase(*i);
                        }
                }
        }
        return A;
}

