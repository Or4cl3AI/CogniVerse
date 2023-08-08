```python
from keras.models import Sequential
from keras.layers import Dense
from keras.optimizers import Adam
from sklearn.model_selection import train_test_split
import pandas as pd
import numpy as np

class KerasModel:
    def __init__(self, data_path):
        self.data_path = data_path
        self.model = Sequential()

    def load_data(self):
        self.data = pd.read_csv(self.data_path)
        self.X = self.data.drop('target', axis=1)
        self.y = self.data['target']
        self.X_train, self.X_test, self.y_train, self.y_test = train_test_split(self.X, self.y, test_size=0.2, random_state=42)

    def build_model(self):
        self.model.add(Dense(64, input_dim=self.X_train.shape[1], activation='relu'))
        self.model.add(Dense(32, activation='relu'))
        self.model.add(Dense(1, activation='sigmoid'))

    def compile_model(self):
        self.model.compile(loss='binary_crossentropy', optimizer=Adam(), metrics=['accuracy'])

    def train_model(self):
        self.model.fit(self.X_train, self.y_train, epochs=10, batch_size=32, validation_data=(self.X_test, self.y_test))

    def evaluate_model(self):
        loss, accuracy = self.model.evaluate(self.X_test, self.y_test)
        print(f'Loss: {loss}, Accuracy: {accuracy}')

    def startLearningJourney(self):
        self.load_data()
        self.build_model()
        self.compile_model()
        self.train_model()
        self.evaluate_model()

if __name__ == "__main__":
    keras_model = KerasModel('path_to_your_data.csv')
    keras_model.startLearningJourney()
```