import os
from bs4 import BeautifulSoup

def parse_html_tags(html_file):
    with open(html_file, 'r', encoding='utf-8') as file:
        content = file.read()
    soup = BeautifulSoup(content, 'html.parser')
    tags = [str(tag) for tag in soup.find_all()]
    return tags

def parse_html_text(html_file):
    with open(html_file, 'r', encoding='utf-8') as file:
        content = file.read()
    soup = BeautifulSoup(content, 'html.parser')
    text = [str(tag.string) for tag in soup.find_all() if tag.string is not None]
    return text

def apply_html_tags(html_file, tags):
    with open(html_file, 'r', encoding='utf-8') as file:
        content = file.read()
    soup = BeautifulSoup(content, 'html.parser')
    
    for i, tag in enumerate(soup.find_all()):
        tag.replace_with(tags[i])
    
    return str(soup)

input_folder1 = 'htmltest'
input_folder2 = 'translatedtest'
output_folder = 'tagshtml'

os.makedirs(output_folder, exist_ok=True)

for filename in os.listdir(input_folder1):
    if filename.endswith('.html'):
        file1_path = os.path.join(input_folder1, filename)
        file2_path = os.path.join(input_folder2, filename)
        output_path = os.path.join(output_folder, filename)

        tags = parse_html_tags(file1_path)

        text = parse_html_text(file2_path)

        modified_html = apply_html_tags(file2_path, tags)
        with open(output_path, 'w', encoding='utf-8') as outfile:
            outfile.write(modified_html)

        print(f'modified {filename} and saved to {output_path}')

