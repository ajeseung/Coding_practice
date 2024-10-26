#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

float ran1(long* idum);
float gasdev(long* idum);

int main() {
	long idum = -1;
	FILE* fp_uniform[4];
	FILE* fp_gauss[4];
	int arr[4] = { 100, 1000, 10000, 100000 };

	for (int i = 0; i < 4; i++) {
		if (i == 0) {
			fp_uniform[0] = fopen("uniform100.txt", "w");
			if (fp_uniform[0] == NULL) {
				printf("asin");
			}
			fp_gauss[0] = fopen("gauss100.txt", "w");
		}
		else if (i == 1) {
			fp_uniform[1] = fopen("uniform1000.txt", "w");
			fp_gauss[1] = fopen("gauss1000.txt", "w");
		}
		else if (i == 2) {
			fp_uniform[2] = fopen("uniform10000.txt", "w");
			fp_gauss[2] = fopen("gauss10000.txt", "w");
		}
		else if (i == 3) {
			fp_uniform[3] = fopen("uniform100000.txt", "w");
			fp_gauss[3] = fopen("gauss100000.txt", "w");
		}
		for (int j = 0; j < arr[i]; j++) {
			fprintf(fp_uniform[i], "%f\n", fmod(ran1(&idum) * 100, 5) - 3);
			fprintf(fp_gauss[i], "%f\n", gasdev(&idum)*1.5 + 0.5);
		}
		fclose(fp_uniform[i]);
	}
}