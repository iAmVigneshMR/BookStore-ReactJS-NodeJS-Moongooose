const usersignup = require('../models/userSignup');
const generateToken = require('../utils/generateToken');

//to register user and to check email exists or not
const registerUser = (async (req, res) => {
  try {
    const { username,email,password } = req.body;
    const userExits = await usersignup.findOne({email});
    // console.log(userExits)
    if(userExits){
        return res.status(400).json({ msg: "user already exists"})
    }
    //save into database
    const user = await usersignup.create({
      username,
      email,
      password
    });
    // console.log(signupUser)
      return res.status(201).json({ 
        _id: user._id,
        name: user.username,
        email: user.email,
        token: generateToken(user._id),
       });
    } catch (error) {
        res.status(500).json("SERVER ERROR");
      }
});
  
//to authencate user
const authUser = (async (req, res) => {
    try {
        const { email,password } = req.body;
        //   console.log(email)
          const user = await usersignup.findOne({ email });
        //   console.log(user);
          if (user && (await user.matchPassword(password))) {
            res.json({
              _id: user._id,
              name: user.name,
              email: user.email,
              token: generateToken(user._id),
            });
          } else {
            res.status(401).json({ msg:"Invalid Email or Password" });
          }
    } catch (error) {
        res.status(500).json("SERVER ERROR");
        throw (error)
    }
});

//to update password
const updatePass = (async (req, res) => {
    try {
        const { password } = req.body;
        const user = await usersignup.findById({ _id: req.params.id });
        //   console.log(user);
          if (user !== (await user.matchPassword(password))) {
            res.json({
              _id: user._id,
              email: user.password
            });
          } else {
            res.status(401).json({ msg:"enter different password" });
          }
      } catch (err) {
        console.error(err);
        res.status(500).json("SERVER ERROR");
      }
});

//to update username and email
const updateUser = (async (req, res) => {
  let { username,email } = req.body;
  try {
    const userExits = await usersignup.findOne({email});
    // console.log(userExits)
    if(!userExits){
      let updateUsers = await usersignup.findByIdAndUpdate(
        req.params.id,
        {
          username,email
        },
        { new: true }
        );
        return res.status(201).json(updateUsers);
      }
      return res.status(400).json({ msg: "user already exists"})
    } catch (err) {
      console.error(err);
      res.status(500).json("SERVER ERROR");
    }
  }
);

//to find the uers data by id
let findUsers = async(req,res) => {
  try {
      let findBks = await usersignup.findOne({ _id: req.params.id });
      // await (await updateBooks).save();
      return res.status(201).json(findBks).populate("usersbook");
    } catch (err) {
      console.error(err);
      res.status(500).json("SERVER ERROR");
    }
}

module.exports = { authUser, registerUser, updateUser, findUsers, updatePass};