import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import random
import copy


def read_data():
    data = pd.read_csv('data.csv')
    x = data['LeftPoint_x']
    y = data['LeftPoint_y']
    x_prime = data['RightPoint_x']
    y_prime = data['RightPoint_y']
    return np.array(x), np.array(y), np.array(x_prime), np.array(y_prime)


def son_x(a, x, y):
    return a[0] * x + a[1] * y + a[2] * x


def son_y(a, x, y):
    return a[3] * x + a[4] * y + a[5] * x


def mother(a, x, y):
    return a[6] * x + a[7] * y + 1


def get_chi_square(a, x, y, x_prime, y_prime):
    chi_square_x = 0
    chi_square_y = 0
    for i in range(100):
        chi_square_x += (x_prime[i] - (son_x(a, x[i], y[i]) / mother(a, x[i], y[i]))) ** 2
        chi_square_y += (y_prime[i] - (son_y(a, x[i], y[i]) / mother(a, x[i], y[i]))) ** 2
    return chi_square_x, chi_square_y


def partial_diff(a, i, x, y, x_y):
    if i == 0:
        return x / mother(a, x, y)
    if i == 1:
        return y / mother(a, x, y)
    if i == 2:
        return 1 / mother(a, x, y)
    if i == 3:
        if x_y == 0:
            return (-1 * son_x(a, x, y) * x) / (mother(a, x, y) ** 2)
        elif x_y == 1:
            return (-1 * son_y(a, x, y) * x) / (mother(a, x, y) ** 2)
    if i == 4:
        if x_y == 0:
            return (-1 * son_x(a, x, y) * y) / (mother(a, x, y) ** 2)
        elif x_y == 1:
            return (-1 * son_y(a, x, y) * y) / (mother(a, x, y) ** 2)


def gradient(a, x, y, x_prime, y_prime):
    g_x = [0 for i in range(5)]
    g_y = [0 for i in range(5)]
    for i in range(5):
        for j in range(100):
            g_x[i] += -2 * (x_prime[j] - son_x(a, x[j], y[j]) / mother(a, x[j], y[j])) * partial_diff(a, i, x[j], y[j],
                                                                                                      0)
            g_y[i] += -2 * (y_prime[j] - son_y(a, x[j], y[j]) / mother(a, x[j], y[j])) * partial_diff(a, i, x[j], y[j],
                                                                                                      1)
    return np.array(g_x), np.array(g_y)


def Hessian(a, x, y):
    hessian_x = np.zeros((5, 5))
    hessian_y = np.zeros((5, 5))
    for i in range(5):
        for j in range(5):
            if i > j:
                hessian_x[i][j] = hessian_x[j][i]
                hessian_y[i][j] = hessian_y[j][i]
            else:
                for (nx, ny) in zip(x, y):
                    hessian_x[i][j] += 2 * partial_diff(a, i, nx, ny, 0) * partial_diff(a, j, nx, ny, 0)
                    hessian_y[i][j] += 2 * partial_diff(a, i, nx, ny, 1) * partial_diff(a, j, nx, ny, 1)
    return hessian_x, hessian_y


def LMM(a, x, y, x_prime, y_prime):
    tem_a = [0 for i in range(8)]
    epoch = 30
    lamda = 0.001
    while epoch > 0:
        gradient_x, gradient_y = gradient(a, x, y, x_prime, y_prime)
        hessian_x, hessian_y = Hessian(a, x, y)
        chi_square_x, chi_square_y = get_chi_square(a, x, y, x_prime, y_prime)

        inverse_hessian_x_prime = np.linalg.inv(hessian_x + np.eye(5) * lamda)
        inverse_hessian_y_prime = np.linalg.inv(hessian_y + np.eye(5) * lamda)

        delta_x = np.dot(inverse_hessian_x_prime, -gradient_x)
        delta_y = np.dot(inverse_hessian_y_prime, -gradient_y)

        for i in range(3):
            tem_a[i] = a[i] + delta_x[i]
            tem_a[i + 3] = a[i + 3] + delta_y[i]
        tem_a[6] = (delta_x[3] + delta_y[3]) / 2
        tem_a[7] = (delta_x[4] + delta_y[4]) / 2

        tem_chi_square_x, tem_chi_square_y = get_chi_square(tem_a, x, y, x_prime, y_prime)
        if tem_chi_square_x + tem_chi_square_y >= chi_square_x + chi_square_y:
            lamda *= 10
        else:
            lamda /= 10
            a = tem_a
        epoch -= 1

    print("after iteration: ", a)
    plt.scatter(x_prime, y_prime)
    plt.scatter(son_x(a, x, y) / mother(a, x, y), son_y(a, x, y) / mother(a, x, y), c='#FF5733')
    plt.xlabel('x or x_prime')
    plt.ylabel('y or y_prime')
    plt.show()


def main():
    x, y, x_prime, y_prime = read_data()

    a = [1, 0, -1, 1, 1, 0, 0, 0]
    print(a)
    plt.scatter(x_prime, y_prime)
    plt.scatter(son_x(a, x, y) / mother(a, x, y), son_y(a, x, y) / mother(a, x, y), c='#FF5733')
    plt.xlabel('x or x_prime')
    plt.ylabel('y or y_prime')
    plt.show()

    print("Result of no noise")
    LMM(a, x, y, x_prime, y_prime)

    # random gaussian distribution
    x_tem = copy.deepcopy(x)
    y_tem = copy.deepcopy(y)
    x_prime_tem = copy.deepcopy(x_prime)
    y_prime_tem = copy.deepcopy(y_prime)
    a = [1, 0, -1, 1, 1, 0, 0, 0]
    print()
    print(a)
    for i in range(100):
        x_tem[i] += random.gauss(0.0, 1)
        y_tem[i] += random.gauss(0.0, 1)
        x_prime_tem[i] += random.gauss(0.0, 1)
        y_prime_tem[i] += random.gauss(0.0, 1)
    print("Result of noise (m = 0, SD = 1)")
    LMM(a, x_tem,y_tem, x_prime_tem, y_prime_tem)

    # random gaussian distribution
    x_tem = copy.deepcopy(x)
    y_tem = copy.deepcopy(y)
    x_prime_tem = copy.deepcopy(x_prime)
    y_prime_tem = copy.deepcopy(y_prime)
    a = [1, 0, -1, 1, 1, 0, 0, 0]
    print()
    print(a)
    for i in range(100):
        x_tem[i] += random.gauss(0.0, 10)
        y_tem[i] += random.gauss(0.0, 10)
        x_prime_tem[i] += random.gauss(0.0, 10)
        y_prime_tem[i] += random.gauss(0.0, 10)
    print("Result of noise (m = 0, SD = 10)")
    LMM(a, x_tem,y_tem, x_prime_tem, y_prime_tem)

   # random gaussian distribution
    x_tem = copy.deepcopy(x)
    y_tem = copy.deepcopy(y)
    x_prime_tem = copy.deepcopy(x_prime)
    y_prime_tem = copy.deepcopy(y_prime)
    a = [1, 0, -1, 1, 1, 0, 0, 0]
    print()
    print(a)
    for i in range(100):
        x_tem[i] += random.gauss(0.0, 20)
        y_tem[i] += random.gauss(0.0, 20)
        x_prime_tem[i] += random.gauss(0.0, 20)
        y_prime_tem[i] += random.gauss(0.0, 20)
    print("Result of noise (m = 0, SD = 20)")
    LMM(a, x_tem, y_tem, x_prime_tem, y_prime_tem)


main()