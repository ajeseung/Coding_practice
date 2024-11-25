from translate import Translator

# Function to split text into chunks of a specified length
def split_text(text, chunk_length):
    return [text[i:i + chunk_length] for i in range(0, len(text), chunk_length)]

# Function to translate a text file to Korean
def translate_to_korean(input_file, output_file):
    try:
        # Initialize the translator
        translator = Translator(to_lang="ko")

        # Read the input text from the file
        with open(input_file, 'r', encoding='utf-8') as f:
            input_text = f.read()

        # Set a maximum chunk length for translation
        max_chunk_length = 230  # Adjust as needed

        # Split the input text into chunks
        text_chunks = split_text(input_text, max_chunk_length)

        # Translate each chunk to Korean and combine the results
        translated_text = ""
        for chunk in text_chunks:
            translated_chunk = translator.translate(chunk)
            translated_text += translated_chunk

        # Save the translated text to the output file
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(translated_text)

        print("Translation complete. Saved to", output_file)

    except FileNotFoundError:
        print("Input file not found.")
    except Exception as e:
        print("An error occurred:", str(e))

# Specify the input and output file paths
input_file_path = 'outputwords.txt'
output_file_path = 'output_korean.txt'

# Call the translation function
translate_to_korean(input_file_path, output_file_path)
