def remove_chars(input_file_path, output_file_path):
    chars_to_remove = {"'", '"', ':', ','}
    with open(input_file_path, 'r') as input_file, open(output_file_path, 'w') as output_file:
        for line in input_file:
            modified_line = ''.join(char for char in line if char not in chars_to_remove)
            output_file.write(modified_line)

input_file_path = 'outputwords.txt'  # Change this to the path of your input file
output_file_path = 'outputcleaned.txt'  # Change this to the path where you want to save the modified text

remove_chars(input_file_path, output_file_path)
