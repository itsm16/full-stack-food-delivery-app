import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { menuModel } from "../models/menu.model.js";
import { orderModel } from "../models/order.model.js";
import { userModel } from "../models/user.model.js";
// include .js in the end


const router = express.Router();

// middleware
const check = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Token missing!" });
  }

  // const existingUser = await userModel.findOne({ username });

  try {
    const verified = jwt.verify(token, "shh"); // Replace "shh" with your secret key
    const verifiedUser = userModel.find({ verified });
    req.user = verifiedUser; // Attach decoded token payload to req for further use
    console.log("verified :", verifiedUser)
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired token!" });
  }


  next();


};

{/*
//order

router.get("/orders", check, async (req, res) => {
  // console.log(req.user);
  res.send("done")
});

router.post("/order", check, (req, res) => {
  // console.log(req);
  // console.log("req.user : ", req.user);
  res.json({
    message: "runs"
  });
});
*/}

router.post("/order", check, (req, res) => {
  console.log(req.body);
  res.send('hey');
});

//menu 
router.get("/menu", async (req, res) => {
  const data = await menuModel.find();
  res.json(data);
});

router.post("/menu", async (req, res) => {
  const data = await menuModel.find();
  const { name, category, price, availability } = req.body;
  const newItem = menuModel.create({ name, category: "Appetizers", price })
  res.json(data);
})

//register -
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 10)
  try {
    const user = await userModel.create({
      username,
      password: hashedPass
    })
    res.send("user created")
  } catch (error) {
    throw error
  }
})

// login -
router.post("/login", async (req, res) => {

  try {
    const { username, password } = req.body;
    const existingUser = await userModel.findOne({ username });
    if (!existingUser) {
      console.log("User Doesn't exist")
      res.json("User doesn't exist")
    }
    const hashedPassword = existingUser.password;
    const isMatched = await bcrypt.compare(password, hashedPassword)
    if (!isMatched) {
      res.json(`Bad creds`)
    }
    const token = await jwt.sign(existingUser.id, "shh");
    console.log("Generated Token:", token);
    res.json({ user: username, userId: existingUser.id, token })
  } catch (error) {
    throw Error
  }
})

export default router;