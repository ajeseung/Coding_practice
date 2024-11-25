import matplotlib.pyplot as plt

weight0 = [0 for i in range(100)]
weight1 = [0 for i in range(1000)]
weight2 = [0 for i in range(10000)]
weight3 = [0 for i in range(100000)]

f0 = open("gauss100.txt","r")
f1 = open("gauss1000.txt","r")
f2 = open("gauss10000.txt","r")
f3 = open("gauss100000.txt","r")

for i in range(100):
    weight0[i] = float(f0.readline())

for i in range(1000):
    weight1[i] = float(f1.readline())

for i in range(10000):
    weight2[i] = float(f2.readline())

for i in range(100000):
    weight3[i] = float(f3.readline())

plt.rcParams["figure.figsize"] = (10, 10)

plt.subplot(2, 2, 1)
plt.title("Gauss 100")
plt.hist(weight0, bins=100)

plt.subplot(2, 2, 2)
plt.title("Gauss 1000")
plt.hist(weight1, bins=100)

plt.subplot(2, 2, 3)
plt.title("Gauss 10000")
plt.hist(weight2, bins=100)

plt.subplot(2, 2, 4)
plt.title("Gauss 100000")
plt.hist(weight3, bins=100)

plt.show()
