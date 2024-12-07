const jwt = require("jsonwebtoken");
const secret = "minha-chave";

const token = jwt.sign({ userId: 123 }, secret, { expiresIn: "1h" });
console.log(token);

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    throw new Error("Token inválido ou expirado");
  }
}

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ error: "Token ausente" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token malformado" });
  }

  try {
    const decoded = verifyToken(token);
    req.userId = decoded.userId;

    next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
}

module.exports = authMiddleware;
