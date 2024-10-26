import os
import translate

def translate_to_korean(text):
    translator = translate.Translator(to_lang="ko", from_lang="en")

    chunk_size = 500
    chunks = [text[i:i + chunk_size] for i in range(0, len(text), chunk_size)]

    translated_content = ' '.join([translator.translate(chunk) for chunk in chunks])

    return translated_content

input_folder = 'htmltest'

output_folder = 'translatedtest'

os.makedirs(output_folder, exist_ok=True)

for filename in os.listdir(input_folder):
    if filename.endswith('.html'):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)

        with open(input_path, 'r', encoding='utf-8') as file:
            html_content = file.read()

        translated_content = translate_to_korean(html_content)

        with open(output_path, 'w', encoding='utf-8') as file:
            file.write(translated_content)

print("omg it's done")
