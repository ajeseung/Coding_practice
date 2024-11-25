import numpy as np
import random

# Step 1: Generate data
m = 10000
n = 1000

x1_train = np.random.uniform(-10, 10, m)
x2_train = np.random.uniform(-10, 10, m)
y_train = np.where((x1_train < -5) | (x1_train > 5), 1, 0)

x1_test = np.random.uniform(-10, 10, n)
x2_test = np.random.uniform(-10, 10, n)
y_test = np.where((x1_test < -5) | (x1_test > 5), 1, 0)

# Step 2: Initialize parameters
W = np.random.randn(6)
b = np.zeros(3)

# Step 3: Determine learning rate
alpha = 0.01

# Step 4: Update parameters with gradient descent
for i in range(5001):
    # Forward propagation
    Z = np.dot(np.array([x1_train, x2_train, np.ones(m)]).T, W) + b
    A = 1 / (1 + np.exp(-Z))
    
    # Calculate cost
    cost = -(y_train @ np.log(A) + (1 - y_train) @ np.log(1 - A)) / m
    
    # Backpropagation
    dZ = A - y_train
    dW = np.dot(np.array([x1_train, x2_train, np.ones(m)]), dZ) / m
    db = np.sum(dZ) / m
    
    # Update parameters
    W -= alpha * dW
    b -= alpha * db * np.ones(3)
    
    # Print progress every 500 iterations
    if i % 500 == 0:
        print(f"Iteration {i}: cost = {cost}")
        print(f"W = {W}")
        print(f"b = {b}")
        
        # Calculate accuracy on training set
        train_preds = np.where(A > 0.5, 1, 0)
        train_acc = np.mean(train_preds == y_train)
        print(f"Train accuracy: {train_acc}")
        
        # Calculate accuracy on test set
        test_Z = np.dot(np.array([x1_test, x2_test, np.ones(n)]).T, W) + b
        test_A = 1 / (1 + np.exp(-test_Z))
        test_preds = np.where(test_A > 0.5, 1, 0)
        test_acc = np.mean(test_preds == y_test)
        print(f"Test accuracy: {test_acc}")
