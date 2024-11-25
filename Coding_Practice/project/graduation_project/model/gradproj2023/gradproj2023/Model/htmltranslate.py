import os
from translate import Translator

def translate_(input_folder, output_folder):
    # Create the output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Initialize the translator
    translator = Translator(to_lang="ko")

    # Iterate over all files in the input folder
    for filename in os.listdir(input_folder):
        if filename.endswith(".txt"):
            input_file = os.path.join(input_folder, filename)
            output_file = os.path.join(output_folder, filename)

            # Read the content of the English text file
            with open(input_file, 'r', encoding='utf-8') as file:
                english_text = file.read()

            # Translate the English text to Korean
            translated_text = translator.translate(english_text)

            # Save the translated text to the output folder
            with open(output_file, 'w', encoding='utf-8') as output:
                output.write(translated_text)

            print(f"Translated '{input_file}' to Korean and saved to '{output_file}'.")

    print("Translation complete.")

if __name__ == "__main__":
    input_folder = input("Enter the input folder path containing English text files: ")
    output_folder = input("Enter the output folder path where translated Korean text files will be saved: ")

    translate_(input_folder, output_folder)
