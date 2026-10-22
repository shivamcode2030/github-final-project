function RunSentimentAnalysis() {
    const input = document.getElementById("textToAnalyze");
    const output = document.getElementById("system_response");
    const textToAnalyze = input.value.trim();

    if (!textToAnalyze) {
        output.textContent = "Invalid text! Please try again!";
        output.className = "result error";
        return;
    }

    const query = encodeURIComponent(textToAnalyze);

    fetch("/emotionDetector?textToAnalyze=" + query)
        .then((response) => response.text().then((body) => ({
            ok: response.ok,
            body: body
        })))
        .then((result) => {
            output.textContent = result.body;
            output.className = result.ok ? "result success" : "result error";
        })
        .catch(() => {
            output.textContent = "Unable to reach the emotion detector.";
            output.className = "result error";
        });
}
