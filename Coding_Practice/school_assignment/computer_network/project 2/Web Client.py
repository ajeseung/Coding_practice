from PIL import Image
import requests

headers = {'User-Agent' : '2018008504/SEUNGILSON/WEBCLIENT/COMPUTERNETWORK'}
host = '175.123.154.220' # IP
port = '33060' # Port number
# conn = http.client.HTTPConnection(host, port) #create connection

while 1:
    cmd = input('input command: ') # GET, PUT, POST, EXIT
    url = input('input url: ')
    
    if cmd == 'exit': # end client
        break
    elif cmd == 'GET':
        response = requests.get('http://' + host + ':' + port + url, headers=headers) # request to server
        print(response.text) # print server response
        print(response.request.headers)
    elif cmd == 'POST':
        input_data = input('input data: ')
        response = requests.post('http://' + host + ':' + port + url, data = input_data, headers=headers ) 
        print(response.text)




