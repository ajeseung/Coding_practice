import numpy as np
import random

x1_train=[],x2_train=[],y_train=[]

for i in range(m):
    x1_train.append(random.uniform(-10,10))
    x2_train.append(random.uniform(-10,10))
    if x1_train[-1]+ x2_train[-1] > 0:
        y_train.append(1)
    else:
        y_train.append(0)




import random
import numpy as np

m = 100000
x1_train = []
x2_train = []
y_train = []

for i in range(m):
    x1_train.append(random.uniform(-10, 10))
    x2_train.append(random.uniform(-10, 10))

    # if x1_train[-1] + x2_train[-1] > 0:
    if x1_train[-1] < -5 or x1_train[-1] > 5:
        y_train.append(1)
    else:
        y_train.append(0)

learning_rate = 0.01
max_iterations = 5000

def sigmoid(z):
    ret = np.exp(-z)
    ret += 1
    ret = 1 / ret
    return 1 / (1 + np.exp(-z))

def cost(a, y):
    # return np.sum(-y * np.log(a) - (1 - y)* np.log(1 - a))
    return np.mean(-1 * y * np.log(a) - (1 - y) * np.log(1 - a))

def dLda(a, y):
    return -1 * ((y / a) - ((1 - y) / (1 - a)))

def dadz(pred):
    return pred * (1 - pred)

def dzdw(x):
    return x

def dzdb(z):
    return dadz(z)

Xdata = np.array(list(zip(x1_train, x2_train)))
Ydata = np.array(y_train)
W = np.array([0.5, 0.5])
b = 0.5
for i in range(max_iterations):
    z = np.dot(Xdata, W) + b
    pred = sigmoid(z)
    loss = cost(pred, Ydata)

    dLdsig = dLda(pred, Ydata)
    dsigdz = dadz(pred)
    dzdw = Xdata

    dLdw = np.dot(dzdw.T, dLdsig * dsigdz) / m
    dLdb = np.mean(dLdsig * dsigdz)


    W -= dLdw * learning_rate
    b -= learning_rate * dLdb

    # if(i % 500 == 0):
    print('epoch : ', i, ' W : ', W, ' b : ', b, ' loss :', loss)

    # print(loss)

correct = 0
for i in range(m):
    x_data = [x1_train[i], x2_train[i]]
    y_data = y_train[i]
    z = np.dot(x_data, W) + b
    pred = sigmoid(z)

    if (pred > 0.5 and y_data == 1) or (not pred > 0.5 and y_data == 0):
        correct += 1

print('correct: ', correct)
