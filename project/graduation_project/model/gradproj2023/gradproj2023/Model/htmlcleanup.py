import os
from bs4 import BeautifulSoup

def clean_html(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    
    text = soup.get_text()
    
    text = ' '.join(text.split())
    
    return text

input_folder = '/Users/uk/raw_html'

output_folder = '/Users/uk/hanyang/GradProj/html_processed'

os.makedirs(output_folder, exist_ok=True)

for filename in os.listdir(input_folder):
    if filename.endswith('.html'):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)

        with open(input_path, 'rb') as file:
            html_content = file.read().decode('utf-8', errors='ignore')

        cleaned_content = clean_html(html_content)

        with open(output_path, 'w', encoding='utf-8') as file:
            file.write(cleaned_content)

print("success")
