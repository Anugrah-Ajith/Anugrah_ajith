import sys, PyPDF2, json, pathlib
pdf_path = pathlib.Path('ANUGRAH_AJITH_Resume.pdf')
if not pdf_path.is_file():
    print('Resume PDF not found')
    sys.exit(1)
reader = PyPDF2.PdfReader(str(pdf_path))
text = ''
for page in reader.pages:
    try:
        txt = page.extract_text()
        if txt:
            text += txt + '\n'
    except Exception as e:
        pass
print(text)
