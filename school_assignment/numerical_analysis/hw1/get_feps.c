float get_feps() {
	float feps = 1;
	do {
		feps /= 2;
	} while (feps + 1 > 1);

	return feps*2;
}