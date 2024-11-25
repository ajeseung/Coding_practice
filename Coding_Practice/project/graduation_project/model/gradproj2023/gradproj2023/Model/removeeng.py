import re

# Function to remove English characters and hyphens
def remove_english_and_hyphen(text):
    # Regular expression pattern to match English characters and hyphens
    pattern = re.compile('[a-zA-Z-]+')
    return re.sub(pattern, '', text)

# Input and output file paths
input_file_path = 'k_eng.txt'
output_file_path = 'koutput.txt'

try:
    # Open the input file for reading
    with open(input_file_path, 'r', encoding='utf-8') as input_file:
        # Read the content of the input file
        input_text = input_file.read()

    # Apply the function to remove English characters and hyphens
    filtered_text = remove_english_and_hyphen(input_text)

    # Open the output file for writing
    with open(output_file_path, 'w', encoding='utf-8') as output_file:
        # Write the filtered text to the output file
        output_file.write(filtered_text)

    print(f"Filtered Korean text saved to {output_file_path}")

except FileNotFoundError:
    print(f"Input file {input_file_path} not found.")
except Exception as e:
    print(f"An error occurred: {str(e)}")
