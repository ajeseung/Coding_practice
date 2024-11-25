# Hw2

## how to use pointers for memory allocation and function

- pointer는 vector와 array를 나타내기에 매우 좋음. 연속적인 location을 단순 연산으로 접근할 수 있음.

- 한가지 문제점은 많은 algorithms는 1 to M으로 나타내는데, C는 0 to M-1을 이용함. (zero-offset vs unit-offset)

- 다만, 현재 recipe에서, (배열-1)로 처리하면 쉽게 해결할 수 있음. 

- 또한, nrutil.c를 통해 allocation과 deallocation 함수를 제공하고 있다.

- 일차원 배열뿐만 아니라 2차원 배열의 경우에도 해당 함수를 제공하고 있다. 

- 여러가지 utilities를 제공하고 있음.

  - 이미 존재하는 matrix에 새로운 pointer를 배정하는 submatrix()
  - C로 존재하는 matrix를 해당 recipe에서 사용하는 방식으로 바꿔주는 convert_matrix()

  

  

## 문제풀이

- 실행순서

`gcc -o main main.c 3_6.c 3_7.c 4_2.c 4_5.c 4_12.c -lm`

`./main`



- 환경

  OS: Ubuntu 18.04

  언어: C11

  gcc: 7.5.0



### problem 3.6

- 두 가지 방법으로 approximation 진행
- tru value인 6.737947e-3 과 비교
- 각 20개의 term을 추가하면서 true relative error와 approxiamate relative error를 구함.
- 20th result를 보면 확인할 수 있음.

#### 결과

```
======== Problem 3.6 ========
Result of method 1: 0.000000e+00
1th result: 1.000000e+00
Relative true error: -1.474132e+02
Relative approximate error: 0.000000e+00

2th result: -4.000000e+00
Relative true error: 5.946526e+02
Relative approximate error: 1.250000e+00

3th result: 8.500000e+00
Relative true error: -1.260512e+03
Relative approximate error: 1.470588e+00

4th result: -1.233333e+01
Relative true error: 1.831429e+03
Relative approximate error: 1.689189e+00

5th result: 1.370833e+01
Relative true error: -2.033497e+03
Relative approximate error: 1.899696e+00

6th result: -1.233333e+01
Relative true error: 1.831429e+03
Relative approximate error: 2.111486e+00

7th result: 9.368056e+00
Relative true error: -1.389343e+03
Relative approximate error: 2.316531e+00

8th result: -6.132937e+00
Relative true error: 9.112085e+02
Relative approximate error: 2.527499e+00

9th result: 3.555184e+00
Relative true error: -5.266360e+02
Relative approximate error: 2.725069e+00

10th result: -1.827105e+00
Relative true error: 2.721665e+02
Relative approximate error: 2.945801e+00

11th result: 8.640391e-01
Relative true error: -1.272348e+02
Relative approximate error: 3.114610e+00

12th result: -3.592084e-01
Relative true error: 5.431125e+01
Relative approximate error: 3.405398e+00

13th result: 1.504780e-01
Relative true error: -2.133292e+01
Relative approximate error: 3.387115e+00

14th result: -4.555520e-02
Relative true error: 7.760992e+00
Relative approximate error: 4.303202e+00

15th result: 2.445667e-02
Relative true error: -2.629692e+00
Relative approximate error: 2.862690e+00

16th result: 1.119380e-03
Relative true error: 8.338693e-01
Relative approximate error: -2.084841e+01

17th result: 8.412283e-03
Relative true error: -2.484936e-01
Relative approximate error: 8.669351e-01

18th result: 6.267312e-03
Relative true error: 6.984846e-02
Relative approximate error: -3.422475e-01

19th result: 6.863137e-03
Relative true error: -1.857988e-02
Relative approximate error: 8.681532e-02

20th result: 6.706341e-03
Relative true error: 4.690738e-03
Relative approximate error: -2.338029e-02

1th result: 1.000000e+00
Relative true error: -1.474132e+02
Relative approximate error: 0.000000e+00

2th result: 1.666667e-01
Relative true error: -2.373553e+01
Relative approximate error: -5.000000e+00

3th result: 5.405405e-02
Relative true error: -7.022333e+00
Relative approximate error: -2.083333e+00

4th result: 2.542373e-02
Relative true error: -2.773216e+00
Relative approximate error: -1.126126e+00

5th result: 1.529637e-02
Relative true error: -1.270182e+00
Relative approximate error: -6.620763e-01

6th result: 1.093892e-02
Relative true error: -6.234803e-01
Relative approximate error: -3.983429e-01

7th result: 8.840322e-03
Relative true error: -3.120201e-01
Relative approximate error: -2.373899e-01

8th result: 7.774898e-03
Relative true error: -1.538972e-01
Relative approximate error: -1.370338e-01

9th result: 7.230283e-03
Relative true error: -7.306918e-02
Relative approximate error: -7.532415e-02

10th result: 6.959453e-03
Relative true error: -3.287438e-02
Relative approximate error: -3.891547e-02

11th result: 6.831506e-03
Relative true error: -1.388543e-02
Relative approximate error: -1.872889e-02

12th result: 6.774891e-03
Relative true error: -5.482991e-03
Relative approximate error: -8.356623e-03

13th result: 6.751577e-03
Relative true error: -2.022935e-03
Relative approximate error: -3.453070e-03

14th result: 6.742653e-03
Relative true error: -6.984774e-04
Relative approximate error: -1.323534e-03

15th result: 6.739472e-03
Relative true error: -2.263047e-04
Relative approximate error: -4.720658e-04

16th result: 6.738412e-03
Relative true error: -6.901287e-05
Relative approximate error: -1.572810e-04

17th result: 6.738081e-03
Relative true error: -1.986930e-05
Relative approximate error: -4.914259e-05

18th result: 6.737983e-03
Relative true error: -5.416232e-06
Relative approximate error: -1.445299e-05

19th result: 6.737956e-03
Relative true error: -1.401564e-06
Relative approximate error: -4.014662e-06

20th result: 6.737949e-03
Relative true error: -3.450780e-07
Relative approximate error: -1.056486e-06
```







### problem 3.7

- x = 0.577일 때 
- 유효숫자를 제한할 때, 분모가 두가지 경우 모두 0이 되어 infinity가 됨을 알 수 있음.
- 분모 출력형식은 임의로 float으로 함(52까지 늘려도 0임을 확인했습니다.)

#### 결과 

```
======== Problem 3.7 ========
Result by using 3-digit: inf
Result by using 4-digit: inf
denominator of digit-3: 0.000000
denominator of digit-4: 0.000000

**That's the reason why the results are inf**
```



### problem 4.2

- term을 한 개씩 늘려가면서 연산 수행. 
- cos(pi/3) = 1/2
- error criterion보다 error estimate이 낮아지면 중단.

#### 결과

```
======== Problem 4.2 ========
1: Approximation 4.516886e-01, True Percentage Relative Error: 9.662271%, Appor Percentage Relative Error: -121.391441%
2: Approximation 5.017962e-01, True Percentage Relative Error: -0.359240%, Appor Percentage Relative Error: 9.985639%
3: Approximation 4.999646e-01, True Percentage Relative Error: 0.007087%, Appor Percentage Relative Error: -0.366353%
4: Approximation 5.000004e-01, True Percentage Relative Error: -0.000087%, Appor Percentage Relative Error: 0.007174%
5: Approximation 5.000000e-01, True Percentage Relative Error: 0.000001%, Appor Percentage Relative Error: -0.000087%
6: Approximation 5.000000e-01, True Percentage Relative Error: -0.000000%, Appor Percentage Relative Error: 0.000001%
7: Approximation 5.000000e-01, True Percentage Relative Error: 0.000000%, Appor Percentage Relative Error: -0.000000%
8: Approximation 5.000000e-01, True Percentage Relative Error: -0.000000%, Appor Percentage Relative Error: 0.000000%
9: Approximation 5.000000e-01, True Percentage Relative Error: -0.000000%, Appor Percentage Relative Error: -0.000000%
10: Approximation 5.000000e-01, True Percentage Relative Error: -0.000000%, Appor Percentage Relative Error: 0.000000%
11: Approximation 5.000000e-01, True Percentage Relative Error: -0.000000%, Appor Percentage Relative Error: 0.000000%
12: Approximation 5.000000e-01, True Percentage Relative Error: -0.000000%, Appor Percentage Relative Error: 0.000000%
13: Approximation 5.000000e-01, True Percentage Relative Error: -0.000000%, Appor Percentage Relative Error: 0.000000%
14: Approximation 5.000000e-01, True Percentage Relative Error: -0.000000%, Appor Percentage Relative Error: 0.000000%
```

- step 9부터 approxiamtion이 같은 것을 확인할 수 있음







### problem 4.5

- 수식 생성이 어려워서 결과값을 구해서 진행. 

  ![image-20210915160555597](C:\Users\YEO\AppData\Roaming\Typora\typora-user-images\image-20210915160555597.png)

#### 결과

```
======== Problem 4.5 ========
0: True Percent Relative Error: 111.191336%
1: True Percent Relative Error: 85.920578%
2: True Percent Relative Error: 36.101083%
3: True Percent Relative Error: 0.000000%
```

- Tyalor 급수의 order가 늘어 날수록, 오류가 줄어듦을 알 수 있다. 







### problem 4.12

- 미분식은 직접 구해서, 코드로 나타냄.

#### 결과

```
======== Problem 4.12 ========
dv/dv: 1.751125, dv/dm: 0.437781
Approximation Result: 30.4843725157756182397861266508698463439941406250000000 +- 2.188907
```

- 각 변수마다 error의 범위를 구함. 
