const express = require("express");
const auth = require("../middlewares/authMiddlewares");
const router = express.Router();

router.get("/foo-bar", auth, (req, res) => {
  console.log("A rota /foo-bar foi acessada com um token válido.");
  res.status(204).send();
});

module.exports = router;
