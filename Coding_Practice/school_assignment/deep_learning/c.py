import numpy as np
import random

# Set seed for reproducibility
np.random.seed(42)

# Step 1. Generate train and test data
m = 10000  # number of train samples // m = 10,100,10000
n = 1000  # number of test samples

# Train data
x1_train = [random.uniform(-10, 10) for i in range(m)]
x2_train = [random.uniform(-10, 10) for i in range(m)]
y_train = [1 if x1_train[i] < -5 or x1_train[i] > 5 else 0 for i in range(m)]
X_train = np.vstack((x1_train, x2_train)).T  # shape=(m, 2)

# Test data
x1_test = [random.uniform(-10, 10) for i in range(n)]
x2_test = [random.uniform(-10, 10) for i in range(n)]
y_test = [1 if x1_test[i] < -5 or x1_test[i] > 5 else 0 for i in range(n)]
X_test = np.vstack((x1_test, x2_test)).T  # shape=(n, 2)


# Step 2. Initialize weights and biases
W1 = np.random.randn(2, 2)  # 2x2 weight matrix for first layer
b1 = np.random.randn(2, 1)  # 2x1 bias vector for first layer
W2 = np.random.randn(1, 2)  # 1x2 weight matrix for second layer
b2 = np.random.randn(1, 1)  # scalar bias for second layer


# Step 3. Determine learning rate
alpha = 0.01


# Step 4. Train the model with gradient descent
K = 5000  # number of iterations // K = 10, 100, 5000
for i in range(K):
    # Forward propagation
    Z1 = np.dot(W1, X_train.T) + b1  # shape=(2, m)
    A1 = 1 / (1 + np.exp(-Z1))  # shape=(2, m)
    Z2 = np.dot(W2, A1) + b2  # shape=(1, m)
    A2 = 1 / (1 + np.exp(-Z2))  # shape=(1, m)

    # Backward propagation
    dZ2 = A2 - y_train  # shape=(1, m)
    dW2 = np.dot(dZ2, A1.T) / m  # shape=(1, 2)
    db2 = np.sum(dZ2) / m  # scalar
    dA1 = np.dot(W2.T, dZ2)  # shape=(2, m)
    dZ1 = dA1 * A1 * (1 - A1)  # shape=(2, m)
    dW1 = np.dot(dZ1, X_train) / m  # shape=(2, 2)
    db1 = np.sum(dZ1, axis=1, keepdims=True) / m  # shape=(2, 1)

    # Update weights and biases
    W1 = W1 - alpha * dW1
    b1 = b1 - alpha * db1
    W2 = W2 - alpha * dW2
    b2 = b2 - alpha * db2

    # Print progress every 500 iterations
    if i % 500 == 0:
        print(f"Iteration: {i}")
        print("W: ", W1 ,W2)
        print("b: ", b1 ,b2)

# Forward propagation on train set
Z1_train = np.dot(W1, X_train.T) + b1  # shape=(2, m)
A1_train = 1 / (1 + np.exp(-Z1_train))  # shape=(2, m)
Z2_train = np.dot(W2, A1_train) + b2  # shape=(1, m)
A2_train = 1 / (1 + np.exp(-Z2_train))  # shape=(1, m)

# Calculate train accuracy
y_pred_train = np.round(A2_train)
train_acc = np.sum(y_pred_train == y_train) / m *100

# Forward propagation on test set
Z1_test = np.dot(W1, X_test.T) + b1  # shape=(2, n)
A1_test = 1 / (1 + np.exp(-Z1_test))  # shape=(2, n)
Z2_test = np.dot(W2, A1_test) + b2  # shape=(1, n)
A2_test = 1 / (1 + np.exp(-Z2_test))  # shape=(1, n)

# Calculate test accuracy
y_pred_test = np.round(A2_test)
test_acc = np.sum(y_pred_test == y_test) / n * 100

# Print progress
print(f"Train Accuracy: {train_acc:.4f}%, Test Accuracy: {test_acc:.4f}%")
