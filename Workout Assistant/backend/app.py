import os
import google.generativeai as genai
from flask import Flask, request, jsonify
from dotenv import load_dotenv, find_dotenv
from utils import gemini_vision

_ = load_dotenv(find_dotenv())

api_key = os.environ.get('API_KEY')

if not api_key:
    raise ValueError("API key not found!")
genai.configure(api_key=api_key)

multimodal_model = genai.GenerativeModel("gemini-1.5-flash")


app = Flask(__name__)


@app.route('/predict', methods=['POST'])
def predict():
  breakfast = request.files.get('breakfast')
  lunch = request.files.get('lunch')
  dinner = request.files.get('dinner')

  age = request.form.get('age')
  sex = request.form.get('sex')
  goal = request.form.get('goal')
  weight = request.form.get('weight', '')
  height = request.form.get('height', '')
  length = request.form.get('length', '')

  print(f"{age} {sex} {goal}")

    # print_multimodal_prompt([breakfast,lunch,dinner])

    
    # response_2 = gemini_vision("hello", multimodal_model)

    # try:
    #     response_json = json.loads(response_2)
    # except json.JSONDecodeError as e:
    #     logging.error(f"JSON decoding failed: {e}")
    #     return jsonify({'error': 'Failed to parse response as JSON'}), 500
    
    # return jsonify(response_json)

    return jsonify({"json": 2})

if __name__ == '__main__':
    app.run(debug=True)
