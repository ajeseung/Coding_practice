class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Define a LinkedList class
class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def __contains__(self, item):
        current = self.head
        while current:
            if current.data == item:
                return True
            current = current.next
        return False

def load_corpus_to_linked_list(corpus_filename):
    corpus_linked_list = LinkedList()
    with open(corpus_filename, 'r', encoding='utf-8') as corpus_file:
        for line in corpus_file:
            word = line.strip()
            corpus_linked_list.append(word)
    return corpus_linked_list

def calculate_similarity(corpus_linked_list, input_txt_filename):
    total_words = 0
    matched_words = 0

    with open(input_txt_filename, 'r', encoding='utf-8') as input_txt_file:
        for line in input_txt_file:
            words = line.split()
            total_words += len(words)
            for word in words:
                if word in corpus_linked_list:
                    matched_words += 1

    similarity_percentage = (matched_words / total_words) * 100
    return similarity_percentage

if __name__ == "__main__":
    corpus_filename = "koreantestoutput.txt"
    input_txt_filename = "testtesttest.txt"

    corpus_linked_list = load_corpus_to_linked_list(corpus_filename)
    similarity_percentage = calculate_similarity(corpus_linked_list, input_txt_filename)

    print(f"Similarity Percentage: {similarity_percentage:.2f}%")
