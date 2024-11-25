#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "fun.h"

void solve_problem_gaussj(float **a, float *b, int n, int m)
{
    float ll = 1.1;
    float* lll = NULL;
    printf("========== Solve Equation by gaussj ==========\n");
    float **tem_a = (float **)malloc(sizeof(float *) * (m + 1));
    float **tem_b = (float **)malloc(sizeof(float *) * (n + 1));
    for (int i = 1; i <= m; i++)
        tem_a[i] = (float *)malloc(sizeof(float) * (n + 1));
    for (int i = 1; i <= n; i++)
        tem_b[i] = (float *)malloc(sizeof(float) * (n + 1));

    for (int i = 1; i <= m; i++)
        for (int j = 1; j <= n; j++)
            tem_a[i][j] = a[i][j];
    for (int i = 1; i <= n; i++)
        tem_b[i][1] = b[i];

    gaussj(tem_a, n, tem_b, m);

    if (tem_b[1][1] < 1000 && tem_b[1][1] > -1000)
        for (int i = 1; i <= n; i++)
            printf("%.20f\n", tem_b[i][1]);

    for (int i = 1; i <= m; i++)
        free(tem_a[i]);
    for (int i = 1; i <= n; i++)
        free(tem_b[i]);
    free(tem_a);
    free(tem_b);
    printf("\n");
}

void solve_problem_ludcmp(float **a, float *b, int n, int m)
{
    printf("========== Solve Equation by ludcmp ==========\n");
    float **alud = (float **)malloc(sizeof(float *) * (m + 1));
    for (int i = 1; i <= m; i++)
        alud[i] = (float *)malloc(sizeof(float) * (n + 1));

    float *x = (float *)malloc(sizeof(float) * (n + 1));
    int *indx = (int *)malloc(sizeof(int) * (n + 1));
    float d;

    for (int i = 1; i <= m; i++)
        for (int j = 1; j <= n; j++)
            alud[i][j] = a[i][j];
    for (int i = 1; i <= n; i++)
        x[i] = b[i];

    ludcmp(alud, n, indx, &d);
    lubksb(alud, n, indx, x);

    printf("---------- Result Before mprove() ----------\n");
    for (int i = 1; i <= n; i++)
        printf("%.20f\n", x[i]);

    mprove(a, alud, n, indx, b, x);

    printf("---------- Result After mprove ----------\n");
    for (int i = 1; i <= n; i++)
        printf("%.20f\n", x[i]);

    for (int i = 1; i <= m; i++)
        free(alud[i]);
    free(alud);
    free(x);
    free(indx);
    printf("\n");
}

void solve_problem_svdcmp(float **a, float *b, int n, int m)
{
    printf("========== Solve Equation by svdcmp ==========\n");
    float **u = (float **)malloc(sizeof(float *) * (m + 1));
    float **v = (float **)malloc(sizeof(float *) * (n + 1));
    float *w = (float *)malloc(sizeof(float) * (n + 1));
    float *x = (float *)malloc(sizeof(float) * (n + 1));

    for (int i = 1; i <= m; i++)
    {
        u[i] = (float *)malloc(sizeof(float) * (n + 1));
        for (int j = 1; j <= n; j++)
            u[i][j] = a[i][j];
    }

    for (int i = 1; i <= n; i++)
        v[i] = (float *)malloc(sizeof(float) * (n + 1));

    svdcmp(u, m, n, w, v);
    svbksb(u, w, v, m, n, b, x);

    for (int i = 1; i <= n; i++)
        printf("%.20f\n", x[i]);

    for (int i = 1; i <= m; i++)
    {
        free(u[i]);
        free(v[i]);
    }
    free(u);
    free(v);
    free(x);
    free(w);
    printf("\n");
}

void find_inv_det(float **a, float *b, int n, int m)
{
    printf("========== Find inverse and determinant ==========\n");
    printf("By Gauss-Jordan elimination\n");

    float **tem_a = (float **)malloc(sizeof(float *) * (m + 1));
    float **tem_b = (float **)malloc(sizeof(float *) * (n + 1));
    for (int i = 1; i <= m; i++)
        tem_a[i] = (float *)malloc(sizeof(float) * (n + 1));
    for (int i = 1; i <= n; i++)
        tem_b[i] = (float *)malloc(sizeof(float) * (n + 1));

    for (int i = 1; i <= m; i++)
        for (int j = 1; j <= n; j++)
            tem_a[i][j] = a[i][j];

    for (int i = 1; i <= n; i++)
        tem_b[i][1] = b[i];

    gaussj(tem_a, n, tem_b, m);

    printf("---------- Inverse Matrix ----------\n");
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
            printf("%.10f ", tem_a[i][j]);
        printf("\n");
    }

    printf("\nBy LU decomposition\n");
    float **y = (float **)malloc(sizeof(float *) * (m + 1));
    float **alud = (float **)malloc(sizeof(float *) * (m + 1));

    for (int i = 1; i <= m; i++)
    {
        y[i] = (float *)malloc(sizeof(float) * (n + 1));
        alud[i] = (float *)malloc(sizeof(float) * (n + 1));
        for (int j = 1; j <= n; j++)
            alud[i][j] = a[i][j];
    }

    float *col = (float *)malloc(sizeof(float) * (n + 1));
    int *indx = (int *)malloc(sizeof(int) * (n + 1));
    float d;

    ludcmp(alud, n, indx, &d);
    for (int j = 1; j <= n; j++)
        d *= alud[j][j];

    for (int j = 1; j <= n; j++)
    {
        for (int i = 1; i <= m; i++)
            col[i] = 0.0;

        col[j] = 1.0;
        lubksb(alud, n, indx, col);
        for (int i = 1; i <= n; i++)
            y[i][j] = col[i];
    }

    printf("---------- Inverse Matrix ----------\n");
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
            printf("%.10f ", y[i][j]);
        printf("\n");
    }

    printf("---------- Determinant ----------\n  %.20f\n", d);
    for (int i = 1; i <= m; i++)
    {
        free(y[i]);
        free(tem_a[i]);
        free(alud[i]);
        free(tem_b[i]);
    }
    free(y);
    free(tem_b);
    free(alud);
    free(tem_a);
    free(col);
    printf("\n");
    printf("\n");
}

float **make_matrix1(FILE *f, int n, int m, float **a)
{
    a = (float **)malloc(sizeof(float *) * (m + 1));
    for (int i = 1; i <= m; i++)
        a[i] = (float *)malloc(sizeof(float) * (n + 1));

    for (int i = 1; i <= m; i++)
        for (int j = 1; j <= n; j++)
            fscanf(f, "%f", &a[i][j]);

    return a;
}

float *make_matrix2(FILE *f, int n, int m, float *b)
{
    b = (float *)malloc(sizeof(float) * (n + 1));

    for (int i = 1; i <= n; i++)
        fscanf(f, "%f", &b[i]);

    return b;
}

int main(int argc, char **argv)
{
    float **a = NULL;
    float *b = NULL;
    FILE *f[3];
    f[0] = fopen("hw5_data/lineq1.dat", "r");
    f[1] = fopen("hw5_data/lineq2.dat", "r");
    f[2] = fopen("hw5_data/lineq3.dat", "r");
    if (f[0] == NULL)
    {
        fprintf(stderr, "fail to open %s\n", "lineq1.dat");
        fclose(f[0]);
        return 0;
    }
    if (f[1] == NULL)
    {
        fprintf(stderr, "fail to open %s\n", "lineq2.dat");
        fclose(f[1]);
        return 0;
    }
    if (f[2] == NULL)
    {
        fprintf(stderr, "fail to open %s\n", "lineq3.dat");
        fclose(f[2]);
        return 0;
    }
    int n, m;

    for (int i = 0; i < 3; i++)
    {
        fscanf(f[i], "%d %d", &m, &n);
        a = make_matrix1(f[i], n, m, a);
        b = make_matrix2(f[i], n, m, b);
        printf("Solution for linear equation %d\n", i + 1);
        solve_problem_gaussj(a, b, n, m);
        solve_problem_ludcmp(a, b, n, m);
        solve_problem_svdcmp(a, b, n, m);
        find_inv_det(a, b, n, m);
        printf("\n\n");
    }

    for (int i = 1; i <= m; i++)
        free(a[i]);

    free(a);
    free(b);
}