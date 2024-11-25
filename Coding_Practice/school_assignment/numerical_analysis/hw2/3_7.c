#include <math.h>
#include <stdio.h>

float chopping_3(float num)
{
    int i = 0;
    while (num > 1)
    {
        num /= 10;
        i++;
    }
    num *= 1000;
    num = (int)num;
    num = (float)num;
    num = num / 1000;
    while (i > 0)
    {
        num *= 10;
        i--;
    }
    return num;
}

float chopping_4(float num)
{
    int i = 0;

    while (num > 1)
    {
        num /= 10;
        i++;
    }
    num *= 10000;
    num = (int)num;
    num = (float)num;
    num = num / 10000;
    while (i > 0)
    {
        num *= 10;
        i--;
    }
    return num;
}

void problem3_7()
{
    float x = 0.577;
    float tem;
    float molecule_3, denominator_3, result1;
    float molecule_4, denominator_4, result2;

    molecule_3 = chopping_3(x * 6);
    tem = chopping_3(3 * x * x);
    tem = 1 - tem;
    denominator_3 = chopping_3(tem * tem);

    molecule_4 = chopping_4(x*6);
    tem = chopping_4(3 * x * x);
    tem = 1 - tem;
    denominator_4 = chopping_4(tem * tem);

    printf("Result by using 3-digit: %.52f\n", molecule_3 / denominator_3);
    printf("Result by using 4-digit: %.52f\n", molecule_4 / denominator_4);

    printf("denominator of digit-3: %f\ndenominator of digit-4: %f\n", denominator_3, denominator_4);
    printf("\n**That's the reason why the results are inf**\n");
}