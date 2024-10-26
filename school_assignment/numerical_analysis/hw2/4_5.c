#include <stdio.h>

void compute_percent_re_error(double i, double k, int l);

void problem4_5()
{
    double aprox[4];
    aprox[0] = -62;
    aprox[1] = 78;
    aprox[2] = 354;
    aprox[3] = 554;

    double answer = 554;

    for (int i = 0; i < 4; i++)
    {
        compute_percent_re_error(answer, aprox[i], i);
    }
}

void compute_percent_re_error(double true, double aprox, int i)
{
    printf("%d: True Percent Relative Error: %f%%\n",i, ((true-aprox)/true) * 100);
}