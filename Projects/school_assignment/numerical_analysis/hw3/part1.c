#include <stdio.h>

float bessj0(float x);
float bessj1(float x);
void zbrak(float (*fx)(float), float x1, float x2, int n, float xb1[], float xb2[], int *nb);
float rtbis(float (*func)(float), float x1, float x2, float xacc);
float rtflsp(float (*func)(float), float x1, float x2, float xacc);
float rtsec(float (*func)(float), float x1, float x2, float xacc);
float rtnewt(void (*funcd)(float, float *, float *), float x1, float x2, float xacc);
float rtsafe(void (*funcd)(float, float *, float *), float x1, float x2, float xacc);
float muller(float (*func)(float), float x1, float x2, float xacc);

void bessj2(float x, float *i, float *k)
{
    *i = bessj0(x);
    *k = -bessj1(x);
}

void part1()
{
    const float x1 = 1.0;
    const float x2 = 10.0;
    const int diff = 100;
    const int max_roots = 100;
    const float xacc = 1e-6;

    int i;
    int nb = max_roots;
    float xb1[max_roots], xb2[max_roots], root;

    printf("Part1: Find the roots of the Bessel function J0 using the following methods\n");
    zbrak(bessj0, x1, x2, diff, xb1, xb2, &nb);

    printf("======Bisection(rtbis.c)======\n");
    for (i = 1; i <= nb; i++)
    {
        root = rtbis(bessj0, xb1[i], xb2[i], xacc);
        printf("%dth root: %f\n", i, root);
    }

    printf("\n");

    printf("======Linear interpolation(rtflsp.c)======\n");
    for (i = 1; i <= nb; i++)
    {
        root = rtflsp(bessj0, xb1[i], xb2[i], xacc);
        printf("%dth root: %f\n", i, root);
    }

    printf("\n");

    printf("======Secant(rtsec.c)======\n");
    for (i = 1; i <= nb; i++)
    {
        root = rtsec(bessj0, xb1[i], xb2[i], xacc);
        printf("%dth root: %f\n", i, root);
    }

    printf("\n");

    printf("======Newton-Rhpason(rtnewt.c)=======\n");
    for (i = 1; i <= nb; i++)
    {
        root = rtnewt(bessj2, xb1[i], xb2[i], xacc);
        printf("%dth root: %f\n", i, root);
    }

    printf("\n");

    printf("======Newton with bracketing(rtsafe.c)======\n");
    for (i = 1; i <= nb; i++)
    {
        root = rtsafe(bessj2, xb1[i], xb2[i], xacc);
        printf("%dth root: %f\n", i, root);
    }

    printf("\n");

    printf("======Muller Method======\n");
    for (i = 1; i <= nb; i++)
    {
        root = muller(bessj0, xb1[i], xb2[i], xacc);
        printf("%dth root: %f\n", i, root);
    }
}