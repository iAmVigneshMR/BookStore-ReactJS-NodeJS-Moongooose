const express = require('express');
const { authUser, registerUser, updateUser, findUsers, updatePass } = require("../controllers/userController.js");
const {getAllBooks, saveBooks, editBooks, deleteBooks,findBooks, usersId } = require('../controllers/bookController');

const router = express.Router();

router.route("/signup").post(registerUser);
router.route("/login").post(authUser);
router.route("/updateUser/:id").put(updateUser);
router.route("/findUsers/:id").get(findUsers);
router.route("/updatePass/:id").put(updatePass);

router.route("/getAllBooks").get(getAllBooks);
router.route("/saveBooks").post(saveBooks);
router.route("/editBooks/:id").put(editBooks);
router.route("/deleteBooks/:id").delete(deleteBooks);
router.route("/findBooks/:id").get(findBooks);
router.route("/usersId/:id").get(usersId);

module.exports = router