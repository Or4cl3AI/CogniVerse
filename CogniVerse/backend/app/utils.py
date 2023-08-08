```python
from flask import jsonify
from werkzeug.security import generate_password_hash, check_password_hash

def response_with(data, message=None, error=None, code=200):
    """
    Utility function to create a Flask response
    """
    return jsonify({"data": data, "message": message, "errors": error}), code

def hash_password(password):
    """
    Utility function to hash a password.
    """
    return generate_password_hash(password)

def check_password(password_hash, password):
    """
    Utility function to check a hashed password.
    """
    return check_password_hash(password_hash, password)
```