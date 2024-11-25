#define _CRT_SECURE_NO_WARNINGS

#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include"nrutil.h"

void gaussj(float** a, int n, float** b, int m);

void read_Data(FILE* file, float* x, float* y, float* xp, float* yp)
{
	for (int i = 0; i < 77; i++) {
		fscanf(file, "%f %f %f %f", &x[i], &y[i], &xp[i], &yp[i]);
	}
}

void fitting(float** para, float* x, float* y, float* xp, float* yp, int N, int M, int K)
{
	float** A = matrix(1, M, 1, M);

	for (int i = 1; i <= M; i++) {
		for (int j = 1; j <= M; j++) {
			A[i][j] = 0;
			if (j <= 2) {
				para[i][j] = 0;
			}
		}
	}

	for (int i = 0; i < N; i++) {
		A[1][1] += x[i] * x[i];
		A[1][2] += x[i] * y[i];
		A[1][3] += x[i];
		A[2][2] += y[i] * y[i];
		A[2][3] += y[i];
		para[1][1] += x[i] * xp[i];
		para[1][2] += x[i] * yp[i];
		para[2][1] += xp[i] * y[i];
		para[2][2] += y[i] * yp[i];
		para[3][1] += xp[i];
		para[3][2] += yp[i];
	}
	A[2][1] = A[1][2];
	A[3][1] = A[1][3];
	A[3][2] = A[2][3];
	A[3][3] = N;

	gaussj(A, M, para, K);

}

int main(int argc, char** argv)
{
	int N = 77;
	int M = 3;
	int K = 2;

	FILE* f[3];
	f[0] = fopen("data/fitdata1.dat", "r");
	f[1] = fopen("data/fitdata2.dat", "r");
	f[2] = fopen("data/fitdata3.dat", "r");
	if (f[0] == NULL)
	{
		fprintf(stderr, "fail to open %s\n", "data/fitdata1.dat");
		fclose(f[0]);
		return 0;
	}
	if (f[1] == NULL)
	{
		fprintf(stderr, "fail to open %s\n", "data/fitdata2.dat");
		fclose(f[2]);
		return 0;
	}
	if (f[2] == NULL)
	{
		fprintf(stderr, "fail to open %s\n", "data/sfitdata3.dat");
		fclose(f[2]);
		return 0;
	}

	float* x, * y, * xp, * yp;
	x = (float*)malloc(sizeof(float) * N);
	y = (float*)malloc(sizeof(float) * N);
	xp = (float*)malloc(sizeof(float) * N);
	yp = (float*)malloc(sizeof(float) * N);
	float** para = matrix(1, M, 1, K);

	for (int i = 0; i < 3; i++)
	{
		read_Data(f[i], x, y, xp, yp);
		printf("==========Fitting parameter result for data%d(fitdata%d.dat)==========\n", i + 1, i + 1);

		fitting(para, x, y, xp, yp, N, M, K);

		int a = 1;
		for (int i = 1; i <= K; i++) {
			for (int j = 1; j <= M; j++)
				printf("a%d: %f\n", a++, para[j][i]);
		}

		fclose(f[i]);
		printf("\n");
	}
	free_matrix(para);
	free(x);
	free(y);
	free(xp);
	free(yp);
}