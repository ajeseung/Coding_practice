#define A(x) x B (x)
#define B(x) x A (x)
//"#define A(x) x B (x)"
//"#define B(x) x A (x)"

//"A(PRINT)"
//A(PRINT)

#define DUMMY
#define A2(x) x B2 DUMMY (x)
#define B2(x) x A2 DUMMY (x)
"#define A2(x) x B2 DUMMY (x)"
"#define B2(x) x A2 DUMMY (x)"


"A2(PRINT)"
A2(PRINT)
