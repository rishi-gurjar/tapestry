from litellm import completion
from dotenv import load_dotenv
import os
load_dotenv()

os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")

def openai_call(interests: str):
    model="gpt-4o"
    content_string = f"""
You an idea generator. The user's interests are given, and you must find adjacent ideas to the user's interests. Your goal is to help the user expand their knowledge, and help them find new interests. The user's interests are: {interests}. Output passion projects and research tangents that the user can pursue. 

Return the information in the following JSON format:
{{
"cards":[
{{title: "Title 1", description: "Description 1", label: "passion-project"}},
{{title: "Title 2", description: "Description 2", label: "passion-project]"}},
{{title: "Title 3", description: "Description 3", label: "research-tangent"}},
{{title: "Title 4", description: "Description 4", label: "research-tangent"}},
]
}}

Add many more than just 4 ideas, these are just the structure, and only return a full completed JSON.
"""
    messages = [
        {"role": "system", "content": content_string},
    ]
    
    response = completion(
        model=model,
        messages=messages,
        stream=False,
        temperature=0.7,
        response_format={"type": "json_object"},
        max_tokens=1000,
    )
    return response