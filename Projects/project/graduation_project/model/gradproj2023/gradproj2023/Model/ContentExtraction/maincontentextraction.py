import json
import requests
from bs4 import BeautifulSoup

url = "https://n.news.naver.com/mnews/article/011/0004256335?sid=102"
with open("tags.json", "r") as json_file:
    corpus_tags = json.load(json_file)["tags"]

response = requests.get(url)
html_content = response.text
soup = BeautifulSoup(html_content, "lxml")

valid_text_content = []

for tag_name in corpus_tags:
    tags_with_name = soup.find_all(tag_name)
    
    for tag in tags_with_name:
        if tag.text.strip() and len(tag.text.strip()) > 30:
            valid_text_content.append(tag.get_text())  

valid_text = "\n".join(valid_text_content)

with open("main_content.txt5", "w", encoding="utf-8") as text_output_file:
    text_output_file.write(valid_text)
