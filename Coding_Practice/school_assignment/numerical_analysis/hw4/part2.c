#include <stdio.h>
#include <math.h>
#include <stdlib.h>

void zbrak(float (*fx)(float), float x1, float x2, int n, float xb1[], float xb2[], int *nb);
float rtbis(float (*func)(float), float x1, float x2, float xacc);
float rtflsp(float (*func)(float), float x1, float x2, float xacc);
float rtsec(float (*func)(float), float x1, float x2, float xacc);
float rtnewt(void (*funcd)(float, float *, float *), float x1, float x2, float xacc);
float rtsafe(void (*funcd)(float, float *, float *), float x1, float x2, float xacc);
float muller(float (*func)(float), float x1, float x2, float xacc);
float function2_1(float x);
void func_final2(float x, float *y, float *dy);

void part2()
{
    const float x1 = 0;
    const float x2 = 2;
    const int diff = 100;
    const int max_roots = 5;
    const float xacc1 = 1e-4;
    const float xacc2 = 1e-6;

    int i;
    int nb = max_roots;
    float* xb1 = malloc(sizeof(float) * max_roots);
    float* xb2 = malloc(sizeof(float) * max_roots);
    float root;
    zbrak(function2_1, x1, x2, diff, xb1, xb2, &nb);
    printf("\n--------------------------------------------------------\n");
    printf("Solving problem 8.32\n\n");
    printf("==================Bisection(rtbis.c)==================\n");
    for (i = 1; i <= nb; i++)
    {
        root = rtbis(function2_1, xb1[i], xb2[i], xacc1);
        printf("%dth root with 1e-4: %f\n", i, root);
    }
    printf("\n");
    for (i = 1; i <= nb; i++)
    {
        root = rtbis(function2_1, xb1[i], xb2[i], xacc2);
        printf("%dth root with 1e-6: %f\n", i, root);
    }

    printf("\n");

    printf("==================Linear interpolation(rtflsp.c)==================\n");
    for (i = 1; i <= nb; i++)
    {
        root = rtflsp(function2_1, xb1[i], xb2[i], xacc1);
        printf("%dth root with 1e-4: %f\n", i, root);
    }
    printf("\n");
    for (i = 1; i <= nb; i++)
    {
        root = rtflsp(function2_1, xb1[i], xb2[i], xacc2);
        printf("%dth root with 1e-6: %f\n", i, root);
    }

    printf("\n");

    printf("==================Secant(rtsec.c)==================\n");
    for (i = 1; i <= nb; i++)
    {
        root = rtsec(function2_1, xb1[i], xb2[i], xacc1);
        printf("%dth root with 1e-4: %f\n", i, root);
    }
    printf("\n");
    for (i = 1; i <= nb; i++)
    {
        root = rtsec(function2_1, xb1[i], xb2[i], xacc2);
        printf("%dth root with 1e-6: %f\n", i, root);
    }

    printf("\n");

    printf("==================Newton-Raphson(rtnewt.c)===================\n");
    for (i = 1; i <= nb; i++)
    {
        root = rtnewt(func_final2, xb1[i], xb2[i], xacc1);
        printf("%dth root with 1e-4: %f\n", i, root);
    }
    printf("\n");
    for (i = 1; i <= nb; i++)
    {
        root = rtnewt(func_final2, xb1[i], xb2[i], xacc2);
        printf("%dth root with 1e-6: %f\n", i, root);
    }

    printf("\n");

    printf("==================Newton with bracketing(rtsafe.c)==================\n");
    for (i = 1; i <= nb; i++)
    {
        root = rtsafe(func_final2, xb1[i], xb2[i], xacc1);
        printf("%dth root with 1e-4: %f\n", i, root);
    }
    printf("\n");
    for (i = 1; i <= nb; i++)
    {
        root = rtsafe(func_final2, xb1[i], xb2[i], xacc2);
        printf("%dth root with 1e-6: %f\n", i, root);
    }

    printf("\n");

    printf("==================Muller Method==================\n");
    for (i = 1; i <= nb; i++)
    {
        root = muller(function2_1, xb1[i], xb2[i], xacc1);
        printf("%dth root with 1e-4: %f\n", i, root);
    }
    printf("\n");
    for (i = 1; i <= nb; i++)
    {
        root = muller(function2_1, xb1[i], xb2[i], xacc2);
        printf("%dth root with 1e-6: %f\n", i, root);
    }

    free(xb1);
    free(xb2);
}