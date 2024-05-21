from flask import Flask, request
from ideas import openai_call, explore_call, unique_idea_call
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

@app.route("/api/card-explore", methods=["POST"])
def explore():
    data = request.get_json()
    if(data):
        print("Recieved \n")
    title = data.get('title', '')
    description = data.get('description', '')
    interests = f"{title}: {description}"
    response = unique_idea_call(interests) # unique_idea_call
    content = response.choices[0].message.content
    print(content)
    return {"message": "Success", "explore": content}, 200


if __name__ == "__main__":
    app.run(debug=True, port=5000)
    print("Running on port 5000")