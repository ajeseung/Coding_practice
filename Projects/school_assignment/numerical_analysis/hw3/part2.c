#include <math.h>
#include <stdio.h>

float rtsafe1(void (*funcd)(float, float *, float *), float x1, float x2, float xacc);
void zbrak(float (*fx)(float), float x1, float x2, int n, float xb1[], float xb2[], int *nb);

float prob1_0(float x)
{
    return 10 * exp(-x) * sin(2 * M_PI * x) - 2;
}

float prob1_1(float x)
{
    return 10 * exp(-x) * (2 * M_PI * cos(2 * M_PI * x) - sin(2 * M_PI * x));
}

void prob1_2(float x, float *i, float *k)
{
    *i = prob1_0(x);
    *k = prob1_1(x);
}

void problem1()
{
    const float xacc = 1e-6;
    float x1 = 0.1;
    float x2 = 1.0;
    int nb;
    float xb1[10];
    float xb2[10];
    float root;

    zbrak(prob1_0, x1, x2, 100, xb1, xb2, &nb);

    root = rtsafe1(prob1_2, xb1[1], xb2[1], xacc);
    printf("root: %f\n", root);
}

float prob2_0(float x)
{
    return x * x - 2 * x * exp(-x) + exp(-2 * x);
}

float prob2_1(float x)
{
    return 2 * exp(-2 * x) * (1 + exp(x)) * (-1 + exp(x) * x);
}

void prob2_2(float x, float *i, float *k)
{
    *i = prob2_0(x);
    *k = prob2_1(x);
}

void problem2()
{
    const float x1 = 0.0;
    const float x2 = 1.0;
    const float xacc = 1e-6;
    int nb = 100;
    float xb1[nb], xb2[nb];

    zbrak(prob2_0, x1, x2, 10000, xb1, xb2, &nb);
    float root;
    nb = 1;
    root = rtsafe1(prob2_2, xb1[1], xb2[1], xacc);
    printf("root: %f\n", root);
}

float prob3_0(float x)
{
    return cos(x + sqrt(2)) + x * (x / 2 + sqrt(2));
}

float prob3_1(float x)
{
    return -sin(x + sqrt(2)) + x + sqrt(2);
}

void prob3_2(float x, float *i, float *k)
{
    *i = prob3_0(x);
    *k = prob3_1(x);
}

void problem3()
{
    const float x1 = -2;
    const float x2 = -1;
    const float xacc = 1e-6;
    int nb = 100;
    float xb1[nb], xb2[nb];

    zbrak(prob3_0, x1, x2, 10000, xb1, xb2, &nb);
    float root = rtsafe1(prob3_2, xb1[1], xb2[1], xacc);
    printf("root: %f\n", root);
}

float prob4_0(float x)
{
    return sin(x);
}

float prob4_1(float x)
{
    return cos(x);
}

void prob4_2(float x, float *i, float *k)
{
    *i = prob4_0(x);
    *k = prob4_1(x);
}

void problem4()
{
    const float x1 = 3;
    const float x2 = 4;
    const float xacc = 1e-6;
    int nb = 100;
    float xb1[nb], xb2[nb];

    zbrak(prob4_0, x1, x2, 1, xb1, xb2, &nb);
    float root = rtsafe1(prob4_2, xb1[1], xb2[1], xacc);
    printf("root: %f\n", root);
}

void part2()
{
    printf("\nPart2\n");

    printf("======problem1======\n");
    problem1();

    printf("\n======problem2======\n");
    problem2();

    printf("\n======problem3======\n");
    problem3();

    printf("\n======problem4======\n");
    problem4();
}