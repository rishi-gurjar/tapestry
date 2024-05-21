from flask import Flask, request
from ideas import openai_call
import json
app = Flask(__name__)

@app.route("/api/mess", methods=["POST"])
def message():
    data = request.get_json()
    if(data):
        print("Recieved \n")
    interests = data.get('text', '')
    response = openai_call(interests)
    content = response.choices[0].message.content
    print(content)
    return {"message": "Success", "ideas": content}, 200

if __name__ == "__main__":
    app.run(debug=True, port=5000)
    print("Running on port 5000")