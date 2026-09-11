const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

async function userSignUpController(req, res) {
  try {
    const { email, password, name } = req.body;
    if (!email) {
      throw new error("Please provide email");
    }
    if (!password) {
      throw new error("Please provide email");
    }
    if (!name) {
      throw new error("Please provide email");
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new Error("Somethung is wrong");
    }

    const payload = {
      ...req.body,
      password: hashPassword,
    };

    const userData = new userModel(payload);
    const saveUSer = userData.save();
    res.status(201).json({
      data: saveUSer,
      success: true,
      error: false,
      message: "User created Successfully",
    });
  } catch (err) {
    res.json({
      message: err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
