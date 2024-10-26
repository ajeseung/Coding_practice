#include <math.h>
#include <stdio.h>
#define MAXIT 40

float muller(float (*func)(float), float x1, float x2, float xacc)
{
    void nrerror(char error_text[]);
    int j;
    float h0, h1, d0, d1, a, b, c, rad, f0, f1, f2, den, xr, dxr;
    float xx1, xx0, xx2;

    xx2 = x1 + (x2 - x1) / 2;
    xx1 = x2;
    xx0 = x1;

    for (j = 1; j <= MAXIT; j++)
    {
        h0 = xx1 - xx0;
        h1 = xx2 - xx1;
        f1 = (*func)(xx1);
        f2 = (*func)(xx2);
        f0 = (*func)(xx0);
        d0 = (f1 - f0) / h0;
        d1 = (f2 - f1) / h1;

        a = (d1 - d0) / (h1 + h0);
        b = a * h1 + d1;
        c = (*func)(xx2);

        rad = sqrt((b * b) - (4 * a * c));

        if (fabs(b + rad) > fabs(b - rad))
            den = b + rad;

        else
            den = b - rad;

        dxr = -2 * c / den;
        xr = xx2 + dxr;

        if (fabs(dxr) < xacc * xr || j >= MAXIT)
        {
            printf("iteration count: %d\n", j - 1);
            return xr;
        }
        xx0 = xx1;
        xx1 = xx2;
        xx2 = xr;
    }
    nrerror("Maximum number of iterations exceeded in muller");
    return 0;
}

#undef MAXIT