import numpy as np
import random

# Step 1: Generate data
m = 10000
n = 1000

x1_train = []
x2_train = []
y_train = []

x1_test = []
x2_test = []
y_test = []

for i in range(m):
    x1_train.append(random.uniform(-10, 10))
    x2_train.append(random.uniform(-10, 10))
    if x1_train[-1] < -5 or x1_train[-1] > 5:
        y_train.append(1)
    else:
        y_train.append(0)

for i in range(n):
    x1_test.append(random.uniform(-10, 10))
    x2_test.append(random.uniform(-10, 10))
    if x1_test[-1] < -5 or x1_test[-1] > 5:
        y_test.append(1)
    else:
        y_test.append(0)

# Step 2: Initialize parameters
np.random.seed(42)
W = np.random.randn(6)
b = np.random.randn(3)

# Step 3: Set hyperparameters
alpha = 0.01
K = 5000

def sigmoid(z):
    ret = np.exp(-z)
    ret += 1
    ret = 1 / ret
    return 1 / (1 + np.exp(-z))

# Step 4: Update W and b with 'm' samples for 5000 iterations
for i in range(K):
    # Forward propagation
    Z = np.dot(W.T, np.array([x1_train, x2_train, np.ones(m)])) + b.reshape(-1, 1)
    A = sigmoid(Z)

    # Backward propagation
    dZ = A - y_train
    dW = np.dot(np.array([x1_train, x2_train, np.ones(m)]), dZ.T)
    db = np.sum(dZ)

    # Update parameters
    W = W - alpha * dW
    b = b - alpha * db

    # Print the cost and accuracy every 500 iterations
    if i % 500 == 0:
        print("W: ", W)
        print("b: ", b)


cost = np.mean(-(y_train * np.log(A) + (1 - y_train) * np.log(1 - A)))
print(f"Iteration {i}, Cost: {cost}")
        
predicted_train = A > 0.5
accuracy_train = np.mean(predicted_train == y_train.reshape(1, -1))
print(f"Accuracy on train set: {accuracy_train * 100}%")

# Evaluate accuracy on test set
Z_test = np.dot(W.T, np.array([x1_test, x2_test, np.ones(n)])) + b.reshape(-1, 1)
A_test = sigmoid(Z_test)
predicted_test = A_test > 0.5
accuracy_test = np.mean(predicted_test == y_test.reshape(1, -1))
print(f"Accuracy on test set: {accuracy_test * 100}%")
