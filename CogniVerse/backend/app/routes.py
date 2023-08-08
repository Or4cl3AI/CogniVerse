```python
from flask import request, jsonify
from . import app, db
from .models import User, LearningJourney, Assessment
from .utils import validate_user, validate_learning_journey, validate_assessment
from .security import authenticate, authorize

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    validate_user(data)
    user = User(**data)
    db.session.add(user)
    db.session.commit()
    return jsonify(user.to_dict()), 201

@app.route('/api/users/<int:user_id>', methods=['GET'])
@authenticate
@authorize
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return jsonify(user.to_dict())

@app.route('/api/learning_journeys', methods=['POST'])
@authenticate
@authorize
def create_learning_journey():
    data = request.get_json()
    validate_learning_journey(data)
    learning_journey = LearningJourney(**data)
    db.session.add(learning_journey)
    db.session.commit()
    return jsonify(learning_journey.to_dict()), 201

@app.route('/api/learning_journeys/<int:journey_id>', methods=['GET'])
@authenticate
@authorize
def get_learning_journey(journey_id):
    learning_journey = LearningJourney.query.get_or_404(journey_id)
    return jsonify(learning_journey.to_dict())

@app.route('/api/assessments', methods=['POST'])
@authenticate
@authorize
def create_assessment():
    data = request.get_json()
    validate_assessment(data)
    assessment = Assessment(**data)
    db.session.add(assessment)
    db.session.commit()
    return jsonify(assessment.to_dict()), 201

@app.route('/api/assessments/<int:assessment_id>', methods=['GET'])
@authenticate
@authorize
def get_assessment(assessment_id):
    assessment = Assessment.query.get_or_404(assessment_id)
    return jsonify(assessment.to_dict())
```