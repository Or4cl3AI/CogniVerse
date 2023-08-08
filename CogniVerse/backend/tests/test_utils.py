```python
import unittest
from app import utils

class TestUtils(unittest.TestCase):

    def setUp(self):
        self.sample_data = {
            "name": "John Doe",
            "email": "johndoe@example.com",
            "password": "password123"
        }

    def test_encrypt_decrypt(self):
        encrypted_data = utils.encrypt(self.sample_data)
        decrypted_data = utils.decrypt(encrypted_data)
        self.assertEqual(self.sample_data, decrypted_data)

    def test_generate_token(self):
        token = utils.generate_token(self.sample_data)
        self.assertIsNotNone(token)

    def test_verify_token(self):
        token = utils.generate_token(self.sample_data)
        verified_data = utils.verify_token(token)
        self.assertEqual(self.sample_data, verified_data)

if __name__ == "__main__":
    unittest.main()
```