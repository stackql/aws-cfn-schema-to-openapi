import os
import json

def get_all_json_keys(directory):
    all_keys = set()  # Use a set to store keys to avoid duplicates
    
    # Iterate through all files in the given directory
    for filename in os.listdir(directory):
        if filename.endswith('.json'):  # Check if the file is a JSON file
            file_path = os.path.join(directory, filename)
            with open(file_path, 'r') as file:
                try:
                    data = json.load(file)  # Load the JSON data
                    all_keys.update(data.keys())  # Add the keys from this file to the set
                except json.JSONDecodeError:
                    print(f"Error decoding JSON from file {filename}")

    return list(all_keys)  # Convert the set to a list before returning

# Usage example
directory_path = 'input-cfn-docs'
keys = get_all_json_keys(directory_path)
print(keys)
