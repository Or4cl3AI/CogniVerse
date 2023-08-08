```python
import unittest
from flask import Flask
from app import create_app, db
from app.routes import *

class TestRoutes(unittest.TestCase):

    def setUp(self):
        self.app = create_app('testing')
        self.client = self.app.test_client()
        self.app_context = self.app.app_context()
        self.app_context.push()
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()
        self.app_context.pop()

    def test_home_route(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_chat_route(self):
        response = self.client.get('/chat')
        self.assertEqual(response.status_code, 200)

    def test_video_conference_route(self):
        response = self.client.get('/video_conference')
        self.assertEqual(response.status_code, 200)

    def test_whiteboard_route(self):
        response = self.client.get('/whiteboard')
        self.assertEqual(response.status_code, 200)

    def test_quiz_route(self):
        response = self.client.get('/quiz')
        self.assertEqual(response.status_code, 200)

    def test_analytics_route(self):
        response = self.client.get('/analytics')
        self.assertEqual(response.status_code, 200)

    def test_security_route(self):
        response = self.client.get('/security')
        self.assertEqual(response.status_code, 200)

    def test_arvr_route(self):
        response = self.client.get('/arvr')
        self.assertEqual(response.status_code, 200)

    def test_learning_journey_route(self):
        response = self.client.get('/learning_journey')
        self.assertEqual(response.status_code, 200)

    def test_assessment_route(self):
        response = self.client.get('/assessment')
        self.assertEqual(response.status_code, 200)

    def test_personalized_learning_route(self):
        response = self.client.get('/personalized_learning')
        self.assertEqual(response.status_code, 200)

    def test_immersive_experience_route(self):
        response = self.client.get('/immersive_experience')
        self.assertEqual(response.status_code, 200)

    def test_collaboration_route(self):
        response = self.client.get('/collaboration')
        self.assertEqual(response.status_code, 200)

    def test_continuous_learning_route(self):
        response = self.client.get('/continuous_learning')
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()
```