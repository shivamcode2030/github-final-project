"""Emotion detection using the IBM Watson NLP service."""

import json

import requests

WATSON_URL = (
    "https://sn-watson-emotion.labs.skills.network/v1/"
    "watson.runtime.nlp.v1/NlpService/EmotionPredict"
)
HEADERS = {
    "grpc-metadata-mm-model-id": "emotion_aggregated-workflow_lang_en_stock"
}
EMOTIONS = ("anger", "disgust", "fear", "joy", "sadness")


def _empty_result():
    """Return the standard result for invalid input."""
    return {
        "anger": None,
        "disgust": None,
        "fear": None,
        "joy": None,
        "sadness": None,
        "dominant_emotion": None,
    }


def emotion_detector(text_to_analyze):
    """Detect five emotions and return the dominant emotion."""
    if text_to_analyze is None or not text_to_analyze.strip():
        return _empty_result()

    payload = {"raw_document": {"text": text_to_analyze}}
    response = requests.post(
        WATSON_URL, headers=HEADERS, json=payload, timeout=30
    )

    if response.status_code == 400:
        return _empty_result()

    response.raise_for_status()
    json_response = json.loads(response.text)
    emotion_scores = json_response["emotionPredictions"][0]["emotion"]
    dominant_emotion = max(
        EMOTIONS, key=lambda emotion: emotion_scores[emotion]
    )

    return {
        "anger": emotion_scores["anger"],
        "disgust": emotion_scores["disgust"],
        "fear": emotion_scores["fear"],
        "joy": emotion_scores["joy"],
        "sadness": emotion_scores["sadness"],
        "dominant_emotion": dominant_emotion,
    }
