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

def unique_idea_call(interests: str):
    model="gpt-4o"
    content_string = f"""
You a startup idea generator. The user's interests are given, and you must find adjacent ideas to the user's interests that are NOVEL that can be commericialized. Be very specific and give a feasible project. They must be B2B or B2C. The user's interests are: {interests}.

Return the information in the following JSON format:
{{
"ideas":[
{{title: "Title 1", description: "Description 1", "problem": "Problem 1", unique_value_proposition: "Value Proposition 1", competing_companies: "Competition 1", b2b_or_b2c: "B2B"}},
{{title: "Title 2", description: "Description 2", "problem": "Problem 2", unique_value_proposition: "Value Proposition 2", competing_companies: "Competition 2", b2b_or_b2c: "B2C"}},
{{title: "Title 3", description: "Description 3", "problem": "Problem 3", unique_value_proposition: "Value Proposition 3", competing_companies: "Competition 3", b2b_or_b2c: "B2B"}},
{{title: "Title 4", description: "Description 4", "problem": "Problem 4", unique_value_proposition: "Value Proposition 4", competing_companies: "Competition 4", b2b_or_b2c: "B2C"}},
]
}}

Output 5 novel ideas, these are just the structure, and only return a full completed JSON. It must be a full JSON object.
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

def explore_call(card_information: str):
    model="gpt-4o"
    content_string = f"""
You are given information about a topic the user is interested in exploring. Generate a feasible plan for the user to explore the topic. It must be detailed and provide a clear path for the user to follow. The information given is: {card_information}.
"""
    messages = [
        {"role": "system", "content": content_string},
    ]

    response = completion(
        model=model,
        messages=messages,
        stream=False,
        temperature=0.7,
        # response_format={"type": "json_object"},
        max_tokens=1000,
    )
    return response

if __name__ == "__main__":
    print(unique_idea_call("Urban Viticulture, Explore the possibilities of growing grapes and producing wine in urban settings. Design rooftop vineyards and community-based wineries."))