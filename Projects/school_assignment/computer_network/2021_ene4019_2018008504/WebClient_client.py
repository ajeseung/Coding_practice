import http.client


headers = {"User-Agent" : "2018008504/SEUNGILSON/WEBCLIENT/COMPUTERNETWORK"}
host = '192.168.35.3' # IP
port = 1456 # Port number
conn = http.client.HTTPConnection(host, port) #create connection

while 1:
    cmd = input('input command: ') # GET, PUT, POST, EXIT
    url = input('input url: ')

    
    if cmd == 'exit': # end client
        break
    elif cmd == 'GET':
        conn.request(cmd, url, headers=headers, encode_chunked=True) # request to server
        
    elif cmd == 'POST':
        input_data = input("input data: ")
        conn.request(cmd, url, input_data, headers=headers, encode_chunked=True)
        
    response = conn.getresponse() # get response from server
    print(response.status, response.reason) # print server response
    data1 = response.read()
    print(data1) # print server data

conn.close()


    
