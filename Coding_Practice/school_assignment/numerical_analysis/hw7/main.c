#define _CRT_NO_WARNINGS_
#include <stdio.h>
#include "nrutil.h"

float gasdev(long* idum);
void jacobi(float** a, int n, float d[], float** v, int* nrot);
void eigsrt(float d[], float** v, int n);

int main()
{
	long idum = -1;
	int n = 11;
	float** arr = matrix(1, n, 1, n);
	float** v = matrix(1, n, 1, n);
	float* d = vector(1, n);
	int nrot;

	for (int i = 1; i <= 11; i++) 
	{
		for (int j = i; j <= 11; j++)
		{
			arr[i][j] = gasdev(&idum);
			arr[j][i] = arr[i][j];
		}
	}

	jacobi(arr, n, d, v, &nrot);
	eigsrt(d, v, n);

	for (int i = 1; i <= 11; i++)
	{
		printf("eigen values: %f \n", d[i]);
		printf("eigen vectors(tranpose): ");
		for (int j = 1; j <= 11; j++)
			printf("%f  ", v[i][j]);
		printf("\n");
	}
}