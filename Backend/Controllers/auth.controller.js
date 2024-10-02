import User from "../Models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const signup = async (req, res) => {
    try {
      const hashedPassword = await bcryptjs.hash(req.body.password, 10); 
      await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      }).then(() => {
         res.json({ message: "User created successfully" });
      }).catch((err) => {
          res.status(500).json(err);
        });
    } catch (err) {
       res.status(500).json(err.message);
    }
  }

export const signin = async (req, res,next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({
      email: email,
    });
    if (!validUser) {
     return  res.status(400).json({ message: "User not found" });
    }
    const validPassword = await bcryptjs.compare(password, validUser.password);
    if (!validPassword) {
     return  res.status(400).json({ message: "User not found" });
    }
    const token = jwt.sign({ id: validUser._id }, process.env.SECRET_KEY);
    res.cookie("access_token", token,{
      httpOnly:true,
      expires: new Date(Date.now() + 24*60*60*1000),
    } ).json(validUser);

  } catch (error) {
    res.status(500).json(error);
  }
}