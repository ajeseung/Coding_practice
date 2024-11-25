from socket import *

serverPort = 12000
serverSocket = socket(AF_INET, SOCK_STREAM)
serverSocket.bind(('',serverPort))
serverSocket.listen(1)
print ('The server is ready to receive')

while True:
    connectionSocket, addr = serverSocket.accept()
    print(f"Connection from (addr)")

    while True:
        sentence = connectionSocket.recv(1024)
        if not sentence:
            break
        print(f"Received: (sentence.decode())")
        connectionSocket.send(sentence)

    connectionSocket.close()