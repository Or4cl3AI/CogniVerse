```python
from flask import current_app
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from itsdangerous import BadSignature, SignatureExpired
from .database import db, User

def generate_auth_token(user_id, expiration=600):
    s = Serializer(current_app.config['SECRET_KEY'], expires_in=expiration)
    return s.dumps({'id': user_id}).decode('utf-8')

def verify_auth_token(token):
    s = Serializer(current_app.config['SECRET_KEY'])
    try:
        data = s.loads(token)
    except SignatureExpired:
        return None    # valid token, but expired
    except BadSignature:
        return None    # invalid token
    user = User.query.get(data['id'])
    return user

def encrypt_password(password):
    return db.func.sha256(password)

def check_password(hashed_password, password):
    return hashed_password == db.func.sha256(password)
```