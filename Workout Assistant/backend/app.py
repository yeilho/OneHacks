from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    # Get image data from the React app
    breakfast = request.files['breakfast']
    lunch = request.files['lunch']
    dinner = request.files['dinner']

    # Process image data and call your Gemini function
    response = gemini_vision(image_data, model)  # Replace 'model' with your Gemini model

    # Return the response as JSON
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)