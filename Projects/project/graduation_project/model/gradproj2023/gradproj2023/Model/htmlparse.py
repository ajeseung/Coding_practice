import os
from bs4 import BeautifulSoup

def parse_html_and_extract_text(input_folder, output_folder):
    try:
        # Create the output folder if it doesn't exist
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)

        # Iterate over all files in the input folder
        for filename in os.listdir(input_folder):
            if filename.endswith(".html"):
                input_file = os.path.join(input_folder, filename)
                output_file = os.path.join(output_folder, os.path.splitext(filename)[0] + ".txt")

                with open(input_file, 'r', encoding='utf-8-sig') as file:
                    html_content = file.read()

                soup = BeautifulSoup(html_content, 'html.parser')
                text_content = soup.get_text()

                with open(output_file, 'w', encoding='utf-8') as output:
                    output.write(text_content)

                print(f"text extracted from '{input_file}' and saved to '{output_file}'.")

        print("extraction complete.")

    except FileNotFoundError:
        print(f"folder '{input_folder}' not found.")
    except Exception as e:
        print(f"an error occurred: {str(e)}")

if __name__ == "__main__":
    input_folder = input("input path: ")
    output_folder = input("output path: ")

    parse_html_and_extract_text(input_folder, output_folder)
