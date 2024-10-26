# Hw3

# 2018008504 손승일

## 환경
-OS : Linux 18.04
-Compiler : gcc(Ubuntu 7.5.0 -3ubuntu1~18.04) 7.5.0
-vscode 에서 코드 작성 완료후 어떤 이유인지는 모르지만 컴파일(make) 가 안되서  컴파일만 Linux에서 진행

## 실행순서
```
make
./main
```

## Part1: Find the roots of the Bessel function J0 using the following methods
- zbrak을 이용하여 대략적인 root의 범위를 구함. 
- 다음은 결과값에 출력이다.
### Bisection(rtbis.c)
```
======Bisection(rtbis.c)======
반복문 횟수: 17
1th root: 2.404826
반복문 횟수: 17
2th root: 5.520078
반복문 횟수: 17
3th root: 8.653728
```

### Linear interpolation(rtflsp.c)
```
======Linear interpolation(rtflsp.c)======

반복문 횟수: 4
1th root: 2.404826
반복문 횟수: 3
2th root: 5.520078
반복문 횟수: 3
3th root: 8.653728
```

### Secant(rtsec.c)
```
=======Secant(rtsec.c)======
반복문 횟수: 4
1th root: 2.404825
반복문 횟수: 3
2th root: 5.520078
반복문 횟수: 3
3th root: 8.653728
```

### Newton-Rhpason(rtnewt.c)
```
======Newton-Rhpason(rtnewt.c)======
반목문 횟수: 3
1th root: 2.40485
반목문 횟수: 3
2th root: 5.520078
반목문 횟수: 3
3th root: 8.653728
```

### Newton with bracketing(rtsafe.c)
```
======Newton with bracketing(rtsafe.c)======
반복문 횟수: 3
1th root: 2.404825
반복문 횟수: 3
2th root: 5.520078
반복문 횟수: 3
3th root: 8.653728
```

### Muller Method
```
======Muller Method======
반복문 횟수: 2
1th root: 2.404825
반복문 횟수: 3
2th root: 5.520078
반복문 횟수: 2
3th root: 8.653728
```

### Convergence speed 비교
- 각 methods들이 해를 구하는 과정에서 반복문 수행 횟수를 비교함(시간차를 유의미하게 구분하기 어려움)

| Methods | Total sum |
:--------- | :---------:
Bisection | 51(17+17+17)
Linear interpolation | 10(4+3+3)
Secant | 10(4+3+3)
Newton-Rhpason | 9(3+3+3)
Newton with bracketing | 9(3+3+3)
Muller Method | 7(2+3+2)

- Muller Method가 가장 빠르다. 아래부터 위로 갈수록 더 느려짐을 확인할 수 있다. 

## Part2. Solve the following problems using the routine of rtsafe.c in NR in C

- problem1: 10 * exp(-x) * sin(2 * PI * x) - 2, on [0.1, 1]
- problem2: x * x - 2 * x * exp(-x) + exp(-2 * x), on [0, 1]
- problem3: cos(x + sqrt(2)) + x * (x / 2 + sqrt(2)), on [-2, -1]
- problem4: sin(x), on [3, 4]
  - 선정 배경: 실제 PI값과 얼마나 유사한지 확인하고자 했다.
  
```
======problem1======
root: 0.449261

======problem2======
root: 0.567164

======problem3======
root: -1.414453

======problem4======
root: 3.141593
```