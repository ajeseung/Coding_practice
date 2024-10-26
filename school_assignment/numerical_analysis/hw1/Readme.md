- 환경

  OS: Ubuntu 18.04

  언어: C11

  gcc: 7.5.0

- 실행순서
  1. gcc -o main main.c machar.c machar_double.c get_feps.c get_deps.c
  2. ./main

- 출력 형식

  첫 두줄은 책에서 주어진 함수인 machar.c와 이를 변형하여 double에 적용한 machar_double에 대한 결과값입니다.
  그후 두줄은 제가 직접 eps를 구한 값 입니다.

  이 둘의 차이는 없는 것을 확인할 수 있습니다.

- 구현 방법

  machar_double.c를 생성하기 위해서, machar.c에서 float으로 표현된 것들을 double로 수정했습니다. 
  machar.c의 line 2, 4, 5, 6, 9를 수정했습니다.

  직접 함수를 구현하기 위하여, get_feps.c와 get_deps.c를 만들었습니다. 각각, float과 double의 eps를 구하기 위함입니다.
  두 함수 모두 eps의 초기값을 1로 설정하고, eps + 1 > 1 이라면 계속 나누어줍니다.



감사합니다.

