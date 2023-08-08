```python
import pandas as pd

def load_data(file_path):
    """
    Load data from a CSV file using Pandas.
    """
    data = pd.read_csv(file_path)
    return data

def clean_data(data):
    """
    Clean the data by removing null values and duplicates.
    """
    data = data.dropna()
    data = data.drop_duplicates()
    return data

def analyze_data(data):
    """
    Analyze the data using Pandas' built-in functions.
    """
    summary = data.describe()
    return summary

def save_data(data, file_path):
    """
    Save the cleaned and analyzed data to a new CSV file.
    """
    data.to_csv(file_path, index=False)

def start_data_analysis():
    """
    Start the data analysis process.
    """
    data = load_data('data/raw_data.csv')
    data = clean_data(data)
    summary = analyze_data(data)
    save_data(summary, 'data/summary_data.csv')
```
