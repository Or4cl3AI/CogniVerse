```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np
import pandas as pd

class TensorFlowModel:
    def __init__(self):
        self.model = keras.Sequential()

    def build_model(self, input_shape):
        self.model.add(layers.Dense(64, activation='relu', input_shape=input_shape))
        self.model.add(layers.Dense(64, activation='relu'))
        self.model.add(layers.Dense(1))

        self.model.compile(loss='mean_squared_error',
                    optimizer=tf.keras.optimizers.RMSprop(0.001),
                    metrics=['mean_absolute_error', 'mean_squared_error'])
        return self.model

    def train_model(self, train_dataset, train_labels, epochs):
        self.model.fit(train_dataset, train_labels, epochs=epochs)

    def evaluate_model(self, test_dataset, test_labels):
        return self.model.evaluate(test_dataset, test_labels)

    def predict(self, input_data):
        return self.model.predict(input_data)

def startLearningJourney():
    # Load data
    dataset = pd.read_csv('data.csv')

    # Split the data into train and test
    train_dataset = dataset.sample(frac=0.8,random_state=0)
    test_dataset = dataset.drop(train_dataset.index)

    # Split features from labels
    train_labels = train_dataset.pop('label')
    test_labels = test_dataset.pop('label')

    # Initialize the model
    model = TensorFlowModel()

    # Build the model
    model.build_model([len(train_dataset.keys())])

    # Train the model
    model.train_model(train_dataset, train_labels, epochs=1000)

    # Evaluate the model
    print(model.evaluate_model(test_dataset, test_labels))

    # Make a prediction
    print(model.predict(np.array([5, 2, 3, 1])))

startLearningJourney()
```