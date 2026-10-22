# Coursera Final Project — Emotion Detector Submission Guide

Repository:
https://github.com/shivamcode2030/github-final-project

## Task 1 — README.md URL

Submit:
https://github.com/shivamcode2030/github-final-project/blob/main/README.md

## Task 2 — Watson NLP emotion detection

### Activity 1
Submit the code from:
https://github.com/shivamcode2030/github-final-project/blob/main/EmotionDetection/emotion_detection.py

The key function is `emotion_detector(text_to_analyze)`. It sends the text to the Watson NLP EmotionPredict service and extracts the five emotion scores.

### Activity 2
Run this in the Cloud IDE/lab:

    python3

Then:

    from EmotionDetection.emotion_detection import emotion_detector
    emotion_detector("I love this new technology")

Save and submit the actual terminal output from your environment. Do not invent the score values.

## Task 3 — Output formatting

### Activity 1
Submit the updated `emotion_detector` function from:
https://github.com/shivamcode2030/github-final-project/blob/main/EmotionDetection/emotion_detection.py

It returns:
`anger`, `disgust`, `fear`, `joy`, `sadness`, and `dominant_emotion`.

### Activity 2
Run:

    python3 -c "from EmotionDetection.emotion_detection import emotion_detector; print(emotion_detector('I am glad this happened'))"

Save the actual output.

## Task 4 — Package validation

### Activity 1
Submit this public URL:

https://github.com/shivamcode2030/github-final-project/blob/main/EmotionDetection/__init__.py

The package initializer imports the application module.

### Activity 2
Run:

    python3 -c "from EmotionDetection import emotion_detection; print('EmotionDetection package is valid')"

Save the terminal output.

## Task 5 — Unit tests

### Activity 1
Submit the code from:

https://github.com/shivamcode2030/github-final-project/blob/main/test_emotion_detection.py

### Activity 2
Run:

    python3 -m unittest test_emotion_detection.py -v

Submit the actual terminal output showing all five tests passed.

## Task 6 — Flask deployment

### Activity 1
Submit the code from:

https://github.com/shivamcode2030/github-final-project/blob/main/server.py

### Activity 2
Start the application:

    python3 server.py

Open:

    http://localhost:5000/

Enter:

    I am glad this happened

Click **Analyze Emotion** and capture the required screenshot as `6b_deployment_test.png`.

## Task 7 — Error handling

### Activity 1
Submit the updated `emotion_detector` function from:

https://github.com/shivamcode2030/github-final-project/blob/main/EmotionDetection/emotion_detection.py

It handles HTTP 400 responses by returning all emotion values and `dominant_emotion` as `None`.

### Activity 2
Submit the relevant `server.py` section:

    text_to_analyze = request.args.get("textToAnalyze")

    if text_to_analyze is None or not text_to_analyze.strip():
        return "Invalid text! Please try again!", 400

    response = emotion_detector(text_to_analyze)

    if response.get("dominant_emotion") is None:
        return "Invalid text! Please try again!", 400

### Activity 3
In the browser at:

    http://localhost:5000/

leave the text box blank and click **Analyze Emotion**.

Capture the actual interface showing:

    Invalid text! Please try again!

Save it as `7c_error_handling_interface.png`.

## Task 8 — Static code analysis

### Activity 1
Submit the code from:

https://github.com/shivamcode2030/github-final-project/blob/main/server.py

### Activity 2
Run:

    pylint server.py

Submit the actual terminal output showing:

    Your code has been rated at 10.00/10

Only submit a 10.00/10 result after running Pylint in the course environment.

## Important

The GitHub repository and source files are prepared for the assignment. The terminal outputs and screenshots must be captured from your own Cloud IDE/lab session because they depend on the live Watson NLP service and running Flask application.
