"""Unit tests for the Watson NLP emotion detector."""

import unittest

from EmotionDetection.emotion_detection import emotion_detector


class TestEmotionDetector(unittest.TestCase):
    """Test the dominant emotion for representative sentences."""

    def test_joy(self):
        """Joy should be the dominant emotion."""
        result = emotion_detector("I am glad this happened")
        self.assertEqual(result["dominant_emotion"], "joy")

    def test_anger(self):
        """Anger should be the dominant emotion."""
        result = emotion_detector("I am really mad about this")
        self.assertEqual(result["dominant_emotion"], "anger")

    def test_disgust(self):
        """Disgust should be the dominant emotion."""
        result = emotion_detector("I feel disgusted just hearing about this")
        self.assertEqual(result["dominant_emotion"], "disgust")

    def test_sadness(self):
        """Sadness should be the dominant emotion."""
        result = emotion_detector("I am so sad about this")
        self.assertEqual(result["dominant_emotion"], "sadness")

    def test_fear(self):
        """Fear should be the dominant emotion."""
        result = emotion_detector(
            "I am really afraid that this will happen"
        )
        self.assertEqual(result["dominant_emotion"], "fear")


if __name__ == "__main__":
    unittest.main()
