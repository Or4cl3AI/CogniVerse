```python
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# Initialize SQLAlchemy instance
db = SQLAlchemy()

def init_db(app):
    """
    Initialize the database with the given Flask app.
    """
    db.init_app(app)
    Migrate(app, db)
```