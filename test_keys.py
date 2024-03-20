import os
import re
import yaml

def find_consecutive_capital_keys(yaml_content):
    # Compile a regex to find keys with consecutive capital letters in JSON_EXTRACT statements
    # json_extract_pattern = re.compile(r"JSON_EXTRACT\(Properties, '\$\.([A-Z][A-Za-z0-9]*[A-Z][A-Za-z0-9]*)'\)")
    json_extract_pattern = re.compile(r"JSON_EXTRACT\(Properties, '\$\.([A-Za-z]*[A-Z]{2,}[A-Za-z]*)'\)")
    
    keys = set()

    # Recursively search for 'ddl' keys in dictionaries
    def recurse_items(dictionary):
        for key, value in dictionary.items():
            if key == 'ddl':
                # When a 'ddl' key is found, search for the pattern in its value
                found_keys = json_extract_pattern.findall(value)
                for found_key in found_keys:
                    keys.add(found_key)
            elif isinstance(value, dict):
                recurse_items(value)
            elif isinstance(value, list):
                for item in value:
                    if isinstance(item, dict):
                        recurse_items(item)

    recurse_items(yaml_content)
    return keys

# Directory containing your YAML files
directory = 'src/awscc/v00.00.00000/services'

# Set to store unique keys
unique_keys = set()

# Walk through the directory and process each YAML file
for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.yaml'):
            print(f"Processing file {file}")
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                try:
                    # Load the YAML content
                    data = yaml.safe_load(f)
                    # Find keys with consecutive capital letters in the 'ddl' sections
                    file_keys = find_consecutive_capital_keys(data)
                    unique_keys.update(file_keys)
                except yaml.YAMLError as exc:
                    print(f"Error processing file {file}: {exc}")

# Print the unique keys found
for key in unique_keys:
    print(key)
