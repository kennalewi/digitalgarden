---
title: OCR Scanning Videos
draft: false
tags: 
created date: 2024-06-30
---
Scanning videos so that I can see what text is shown. The [Tesseract OCR](https://tesseract-ocr.github.io) is kind of okay, didn't get the best results but my text on 1080p video is quite small so it might not be the program's fault.

Made a [script with ChatGPT ](https://chatgpt.com/share/5f5d862b-9628-48b5-8bd4-d71d46ae812d)that takes a folder of images, analyzes them with Tesseract, then makes multiple text files of the extracted text.

Then I updated it to make sure that it makes one file with no duplicate text. That way, it's not recording text from multiple frames.

Here's the [final repo](https://github.com/kennalewi/OCRScanningVideos/tree/main)