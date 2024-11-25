#include<stdio.h>
#include<math.h>

void machar(int* ibeta, int* it, int* irnd, int* ngrd, int* machep, int* negep,
	int* iexp, int* minexp, int* maxexp, float* eps, float* epsneg,
	float* xmin, float* xmax);

void machar_double(int* ibeta, int* it, int* irnd, int* ngrd, int* machep, int* negep,
	int* iexp, int* minexp, int* maxexp, double* eps, double* epsneg,
	double* xmin, double* xmax);

float get_feps();
double get_deps();

int main() {
	int ibeta, it, irnd, ngrd, machep, negep, iexp, minexp, maxexp;
	float feps, fepsneg, fxmin, fxmax;

	machar(&ibeta, &it, &irnd, &ngrd, &machep, &negep, &iexp, &minexp, &maxexp, &feps
	, &fepsneg, &fxmin, &fxmax);

	printf("float eps by machar %.23f\n", feps);

	double deps, depsneg, dxmin, dxmax;
	machar_double(&ibeta, &it, &irnd, &ngrd, &machep, &negep, &iexp, &minexp, &maxexp, &deps
		, &depsneg, &dxmin, &dxmax);
		
	printf("double eps by the machar_double %.52f\n", deps);
	
	printf("\n");

	feps = get_feps();
	deps = get_deps();
	printf("float eps by my own function get_feps() = %.23f\n", feps);
	printf("double eps by my own function get_deps() = %.52f\n", deps);

	return 0;
}
