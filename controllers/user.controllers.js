const User = require("../models/user.model");

const signup = async function (req, res) {
  try {
    const { body } = req;
    //user created
    await User.create(body);
    res.status(200).redirect("/");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUsers = async function (req, res) {
  try {
    //get users
    const users = await User.find({});
    res.status(200).render("index", { title: "Lista de users", data: users });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  signup,
  getUsers,
};
