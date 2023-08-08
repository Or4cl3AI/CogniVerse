```python
import unittest
from app.security import encrypt_password, check_encrypted_password

class TestSecurity(unittest.TestCase):

    def setUp(self):
        self.plain_text_password = "test_password"
        self.encrypted_password = encrypt_password(self.plain_text_password)

    def test_encrypt_password(self):
        self.assertNotEqual(self.plain_text_password, self.encrypted_password)

    def test_check_encrypted_password(self):
        self.assertTrue(check_encrypted_password(self.plain_text_password, self.encrypted_password))
        self.assertFalse(check_encrypted_password("wrong_password", self.encrypted_password))

if __name__ == "__main__":
    unittest.main()
```