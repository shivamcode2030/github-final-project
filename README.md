# NLP - Emotion Detection

## Emotion Detector

## IBM Watson NLP Emotion Detection Application

This repository contains the final project for the IBM/Coursera course **Developing AI Applications with Python and Flask**.

The application uses the IBM Watson NLP EmotionPredict service to detect five emotions:

- anger
- disgust
- fear
- joy
- sadness

It also identifies the dominant emotion, exposes the detector through a Flask web application, handles blank or invalid input, includes unit tests, and is prepared for static code analysis with Pylint.

## Project structure

    EmotionDetection/
        __init__.py
        emotion_detection.py
    static/
        mywebscript.js
        style.css
    templates/
        index.html
    server.py
    test_emotion_detection.py
    requirements.txt

## Run the application

    pip install -r requirements.txt
    python server.py

Then open:

    http://localhost:5000/

## Run unit tests

    python -m unittest test_emotion_detection.py -v

## Run static code analysis

    pylint server.py
