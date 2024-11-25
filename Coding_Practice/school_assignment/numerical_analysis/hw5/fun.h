#ifndef _FUN_H_
#define _FUN_H_

void gaussj(float **a, int n, float **b, int m);
void ludcmp(float **a, int n, int *indx, float *d);
void lubksb(float **a, int n, int *indx, float b[]);
void svdcmp(float **a, int m, int n, float w[], float **v);
void svbksb(float **u, float w[], float **v, int m, int n, float b[], float x[]);
void mprove(float **a, float **alud, int n, int indx[], float b[], float x[]);

#endif
