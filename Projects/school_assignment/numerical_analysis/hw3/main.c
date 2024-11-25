/*
bisection (rtbis.c)
linear interpolation (rtflsp.c)
secant (rtsec.c)
Newton-Raphson (rtnewt.c)
Newton with bracking (rtsafe.c)

use bracketing routine zbrak.c
then, call proper routines in NR in c
Set xacc = 10^-6 xx
use pointer to function to write succinct source codes
*/

#include <stdio.h>
#include <stdlib.h>

void part1();
void part2();
void nrerror(char error_text[])
/* Numerical Recipes standard error handler */
{
    fprintf(stderr, "Numerical Recipes run-time error...\n");
    fprintf(stderr, "%s\n", error_text);
    fprintf(stderr, "...now exiting to system...\n");
    exit(1);
}

int main()
{
    part1();
    part2();
}