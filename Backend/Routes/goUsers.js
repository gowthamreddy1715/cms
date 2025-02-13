const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
  editUser,
} = require("../Controller/UserController");
const { protect } = require("../Middleware/authMiddleware");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/get", protect, getUser);
router.put("/put", protect, editUser);

module.exports = router;
