```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# Initialize the database
db = SQLAlchemy()

def create_app():
    # Create the Flask application
    app = Flask(__name__)

    # Configure the database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/cogniverse'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize the database with the application
    db.init_app(app)

    # Import and register the routes
    from .routes import main
    app.register_blueprint(main)

    return app
```