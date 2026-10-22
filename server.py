"""Flask web server for the Watson NLP Emotion Detector."""

# Flask's application object is conventionally named `app`.
# pylint: disable=invalid-name

from flask import Flask, render_template, request

from EmotionDetection.emotion_detection import emotion_detector

app = Flask(__name__)


@app.route("/")
def root():
    """Render the emotion detector web interface."""
    return render_template("index.html")


@app.route("/emotionDetector", methods=["GET"])
def emotion_detector_route():
    """Analyze the query text and return formatted emotion results."""
    text_to_analyze = request.args.get("textToAnalyze")

    if text_to_analyze is None or not text_to_analyze.strip():
        return "Invalid text! Please try again!", 400

    response = emotion_detector(text_to_analyze)

    if response.get("dominant_emotion") is None:
        return "Invalid text! Please try again!", 400

    return (
        "For the given statement, the system response is "
        f"'anger': {response['anger']}, "
        f"'disgust': {response['disgust']}, "
        f"'fear': {response['fear']}, "
        f"'joy': {response['joy']}, "
        f"'sadness': {response['sadness']}. "
        f"The dominant emotion is {response['dominant_emotion']}."
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
