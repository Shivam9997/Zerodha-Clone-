
 
require("dotenv").config();

const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign(
    { id },
    (process.env.JWT_SECRET || 'fallback_super_secret_jwt_key_123456'), // fallback
    { expiresIn: "3d" }
  );
};