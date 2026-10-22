# Coursera Submission Guide

Use the files in this repository as the source for the Coursera final project submission.

## Task 1
README URL:

https://github.com/shivamcode2030/github-final-project/blob/main/README.md

## Task 2
Activity 1: submit the code from:
EmotionDetection/emotion_detection.py

Activity 2: run in the lab:

python3
from EmotionDetection.emotion_detection import emotion_detector
emotion_detector("I love this new technology")

Save the terminal output.

## Task 3
Activity 1: submit the updated emotion_detector function from:
EmotionDetection/emotion_detection.py

Activity 2: run:

python3
from EmotionDetection.emotion_detection import emotion_detector
emotion_detector("I am glad this happened")

Save the terminal output showing the five emotion scores and dominant_emotion.

## Task 4
Activity 1: __init__.py URL:

https://github.com/shivamcode2030/github-final-project/blob/main/EmotionDetection/__init__.py

Activity 2: run:

python3 -c "from EmotionDetection import emotion_detector; print(emotion_detector('I am happy'))"

Save the successful terminal output.

## Task 5
Activity 1: submit:
test_emotion_detection.py

Activity 2: run:

python -m unittest test_emotion_detection.py -v

Save the terminal output showing all tests passed.

## Task 6
Activity 1: submit:
server.py

Activity 2: start the server:

python server.py

Open http://localhost:5000/ and capture the successful emotion-detection interface in the required screenshot.

## Task 7
Activity 1: submit the updated emotion_detector function showing HTTP 400 handling.

Activity 2: submit the server.py section that rejects blank input.

Activity 3: enter a blank input in the browser and capture the required error-handling screenshot.

## Task 8
Activity 1: submit server.py.

Activity 2: run:

pylint server.py

Save the terminal output showing:

Your code has been rated at 10.00/10
