#define _USE_MATH_DEFINES
#include <math.h>

float function1_1(float x)
{
    return exp(-0.005 * x) * cos(sqrt(2000 - 0.01 * x * x) * 0.05) - 0.01;
}

float function1_2(float x)
{
    return exp(-0.005 * x) * ((0.0005 * x * sin(0.05 * sqrt(2000 - 0.01 * x * x)) / sqrt(2000 - 0.01 * x * x)) - 0.005 * cos(0.05 * sqrt(2000 - 0.01 * x * x)));
}

void func_final1(float x, float *y, float *dy)
{
    *y = function1_1(x);
    *dy = function1_2(x);
}

float function2_1(float x)
{
    return 100 * x - pow(x * x + 0.9 * 0.9, 1.5) * 8.85 * M_PI;
}

float function2_2(float x)
{
    return 100 - 1.5 * x * pow(x * x + 0.9 * 0.9, 0.5) * 2 * 8.85 * M_PI;
}

void func_final2(float x, float *y, float *dy)
{
    *y = function2_1(x);
    *dy = function2_2(x);
}

float function3_1(float x)
{
    return 0.99403 + 1.671e-4 * x + 9.7215e-8 * x * x - 9.5838e-11 * x * x * x + 1.9520e-14 * x * x * x * x - 1.2;
}

float function3_2(float x)
{
    return 1.671e-4 + 2 * 9.7215e-8 * x - 3 * 9.5838e-11 * x * x + 4 * 1.9520e-14 * x * x * x;
}

void func_final3(float x, float *y, float *dy)
{
    *y = function3_1(x);
    *dy = function3_2(x);
}
