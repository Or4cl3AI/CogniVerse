```python
import numpy as np

def analyze_data(data):
    """
    Function to analyze data using NumPy
    """
    # Convert list of data into numpy array
    numpy_data = np.array(data)

    # Calculate mean
    mean = np.mean(numpy_data)

    # Calculate median
    median = np.median(numpy_data)

    # Calculate standard deviation
    std_dev = np.std(numpy_data)

    return mean, median, std_dev
```