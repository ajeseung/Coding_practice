#include <stdio.h>

double compute_error(double true, double aprox)
{
    return ((true - aprox) / true);
}

void problem3_6_1()
{
    int x = 5;
    int i;
    double term = 1, e1 = 0, tem;

    for (i = 0; i < 20; i++)
    {
        tem = e1;
        if (i != 0)
            term *= -1 * (double)5 / i;

        else
            tem = 1;

        e1 += term;
        printf("%dth result: %e\n", i + 1, e1);
        printf("Relative true error: %e\n", compute_error(6.737947e-3, e1));
        printf("Relative approximate error: %e\n", compute_error(e1, tem));
        printf("\n");
    }
}

void problem3_6_2()
{
    double e2 = 0, term = 1, tem, inverse = 1;
    int i;
    for (i = 0; i < 20; i++)
    {
        tem = inverse;
        if (i != 0)
            term *= (double)5 / i;
        
        e2 += term;
        inverse = 1/e2;
        printf("%dth result: %e\n", i + 1, inverse);
        printf("Relative true error: %e\n", compute_error(6.737947e-3, inverse));
        printf("Relative approximate error: %e\n", compute_error(inverse, tem));
        printf("\n");
    }
}