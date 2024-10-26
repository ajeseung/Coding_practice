# Hw5 (Random Number Generation)

## 환경

OS: window 

언어: C & Python



## 실행순서

```
1. visual studio 빈프로젝트 생성
2. C 파일들을 소스코드에 복사
3. Compile
4. 폴더 내 생성된 txt파일들을 파이썬 파일 위치에 복사
5. python 파일 실행
6. 각 파일 명에 따른 histogram 생성됨.
```



## Uniform distribution

- [a, b]를 맞추기 위하여 ` fmod(ran1(&idum) * 100, 5) - 3)`실행. a= -3, b = 2 성립함. 

- 표본이 늘어날수록 더 잘 정돈된 형태를 확인할 수 있음. 

uniform.png



## Gauss distribution

- m, n을 맞추기 위해 `gasdev(&idum)*1.5 + 0.5`실행. m = 0.5, s = 1.5 성립함.
- 표본이 늘어날수록 더 잘 정돈된 형태를 확인할 수 있음.  

gauss.png