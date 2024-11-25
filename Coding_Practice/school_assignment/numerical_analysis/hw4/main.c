#include <stdio.h>
#include <stdlib.h>

void part1();
void part2();
void part3();

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
    part3();

    return 0;
}