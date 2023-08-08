```python
import unittest
from app.models import User, LearningJourney, Assessment
from app import db, create_app

class TestModels(unittest.TestCase):

    def setUp(self):
        self.app = create_app('testing')
        self.app_context = self.app.app_context()
        self.app_context.push()
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()
        self.app_context.pop()

    def test_user_model(self):
        user = User(username='test', email='test@test.com')
        db.session.add(user)
        db.session.commit()
        self.assertTrue(User.query.filter_by(username='test').first() is not None)

    def test_learning_journey_model(self):
        journey = LearningJourney(title='Test Journey', description='This is a test journey')
        db.session.add(journey)
        db.session.commit()
        self.assertTrue(LearningJourney.query.filter_by(title='Test Journey').first() is not None)

    def test_assessment_model(self):
        assessment = Assessment(name='Test Assessment', score=100)
        db.session.add(assessment)
        db.session.commit()
        self.assertTrue(Assessment.query.filter_by(name='Test Assessment').first() is not None)

if __name__ == '__main__':
    unittest.main()
```