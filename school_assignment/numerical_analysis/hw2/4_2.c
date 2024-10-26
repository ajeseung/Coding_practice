#include <stdio.h>
#include <math.h>

double compute_percentage_error(double true, double aprox)
{
    return ((true - aprox) / true) * 100;
}

void problem4_2()
{
    double x = M_PI / 3;
    double aprox = 1, term = 1, tem;
    int i = 1;

    while (i < 15)
    {
        term *= (x * x) / ((2 * i) * (2 * i - 1)) * -1;
        tem = aprox;
        aprox += term;
        printf("%d: Approximation %e, True Percentage Relative Error: %f%%, Appor Percentage Relative Error: %f%%\n", i, aprox, compute_percentage_error(0.5, aprox), compute_percentage_error(aprox, tem));
        i++;
    }
}