double get_deps() {
	double deps = 1;
	do {
		deps /= 2;
	} while (deps + 1 > 1);
	
	return deps*2;
}
