import requests

headers = {'User-Agent' : '2018008504/SEUNGILSON/WEBCLIENT/COMPUTERNETWORK'}
host = '166.104.143.225' # IP
port = '62817' # Port number
# conn = http.client.HTTPConnection(host, port) #create connection

while 1:
    cmd = input('input command: ') # GET, PUT, POST, EXIT
    url = input('input url: ')
    
    if cmd == 'exit': # end client
        break
    elif cmd == 'GET':
        response = requests.get('http://' + host + ':' + port + url, headers=headers) # request to server
        print(response.text.encode(encoding='utf-8').decode(encoding='utf-8')) # print server response
        print(response.request.headers)
    elif cmd == 'POST':
        input_data = input('input data: ')
        response = requests.post('http://' + host + ':' + port + url, data = input_data, headers=headers ) 
        print(response.text)


