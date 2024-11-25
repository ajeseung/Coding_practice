class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

# Function to remove spaces from a string and split it into words
def remove_spaces_and_parse(input_str):
    words = input_str.replace(" ", "").split()
    return words

# Read the input text file
input_file_name = "koutput.txt"
output_file_name = "koreantestoutput.txt"

linked_list = LinkedList()

with open(input_file_name, 'r', encoding='utf-8') as input_file:
    for line in input_file:
        words = remove_spaces_and_parse(line)
        for word in words:
            linked_list.append(word)

# Iterate through the linked list and save to output file
with open(output_file_name, 'w', encoding='utf-8') as output_file:
    current = linked_list.head
    while current:
        output_file.write(current.data + ' ')
        current = current.next

print("words extracted and saved to output.txt")
