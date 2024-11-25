# HW4

## 환경

-OS : Linux 18.04
-Compiler : gcc(Ubuntu 7.5.0 -3ubuntu1~18.04) 7.5.0
-vscode 에서 코드 작성 완료후 어떤 이유인지는 모르지만 컴파일(make) 가 안되서  컴파일,실행 결과값 확인을 Linux에서 진행

## 실행순서

```
make
./main
```

## 공통사항

- 파일 별로 1, 2, 3번을 진행했습니다.
- 이미지 캡처로 표현한 해는 모두 n x 1 matrix입니다. 

## 문제 풀이

### File: lineq1.dat

- 결과 캡처

sol1.png

#### Gauss-Jordan Elimination

- singular matrix, 즉, det = 0 이므로 해를 구할 수 없습니다.  

#### LU decomposition

- mprove() 적용 전과 후가 답이 같은 것을 확인할 수 있습니다. 

####  Find inverse matrix and determinant

- inverse matrix는 gaussj()를 수행했을 때 생성되는 inverse, 그리고 ludcmp()를 이용해서 구하는 방법 두가지를 사용했습니다. 

- gaussj()로는 det=0이어서 해를 구하지 못했고, 따라서, inverse도 없습니다.


### File: lineq2.dat

- 결과 캡처

sol2-1.png & sol2-2.png

#### LU decomposition

- mprove() 적용 전과 후, 해의 미세한 차이가 있습니다.


####  Find inverse matrix and determinant

- inverse matrix는 gaussj()를 수행했을 때 생성되는 inverse, 그리고 ludcmp()를 이용해서 구하는 방법 두가지를 사용했습니다. 


### File: lineq3.dat

- 결과 캡처

sol3-1.png & sol3-2.png


#### LU decomposition

- mprove() 적용 전과 후, 해의 미세한 차이가 있습니다.

####  Find inverse matrix and determinant

- inverse matrix는 gaussj()를 수행했을 때 생성되는 inverse, 그리고 ludcmp()를 이용해서 구하는 방법 두가지를 사용했습니다. 


