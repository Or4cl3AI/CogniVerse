```python
import unittest
from app.database import init_db, db
from app.models import User, LearningJourney, Assessment

class TestDatabase(unittest.TestCase):

    def setUp(self):
        self.app = create_app('testing')
        self.app_context = self.app.app_context()
        self.app_context.push()
        init_db()

    def tearDown(self):
        db.session.remove()
        db.drop_all()
        self.app_context.pop()

    def test_user_model(self):
        user = User(username='test', email='test@example.com')
        db.session.add(user)
        db.session.commit()
        self.assertEqual(User.query.get(1).username, 'test')

    def test_learning_journey_model(self):
        journey = LearningJourney(title='Test Journey', description='This is a test journey')
        db.session.add(journey)
        db.session.commit()
        self.assertEqual(LearningJourney.query.get(1).title, 'Test Journey')

    def test_assessment_model(self):
        assessment = Assessment(name='Test Assessment', score=100)
        db.session.add(assessment)
        db.session.commit()
        self.assertEqual(Assessment.query.get(1).name, 'Test Assessment')

if __name__ == '__main__':
    unittest.main()
```