#include <stdio.h>
#include <math.h>

void problem4_12()
{
    double g = 9.81, t = 6, c = 12.5, m = 50;

    double v = g * m * (1 - exp((-c / m) * t)) / c;
    double dc = fabs(g * (t * c + m) * exp((-t * c) / m) / (c * c));
    double dm = fabs(g * (m + c * t) * exp(-c * t / m) / (c * m));
    
    printf("dv/dv: %f, dv/dm: %f\n", dc, dm);
    printf("Approximation Result: %.52f +- %f\n", v, dc + dm);
}