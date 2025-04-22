import express, { Router } from "express";
import dotenv from "dotenv";
import jwt, { decode } from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import pool from "./db.js";

dotenv.config();

const router = express.Router();

router.post("/subscribe", async (req, res) => {
  const { subscribe } = req.body;
  const newEmail = await pool.query(
    "INSERT INTO users_information (subscribe) VALUE ($1)"
  );
  res.json(newEmail)
  console.log(newEmail)
});

router.post("/signup", async (req, res) => {
  const { fullname, email, password } = req.body;
  if(!fullname || !email || !password){
    return res.status(400).json({message:'Please provide your details'})
  }
  try {
    const checkUser = await pool.query(
      "SELECT * FROM users_information WHERE email_address = $1",
      [email]
    );
    console.log(checkUser);
    if (checkUser.rows.length > 0) {
      res.status(400).json({ message: "User already Exist" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const newUser = await pool.query(
      "INSERT INTO users_information (fullname,email_address,password) VALUES ($1,$2,$3) RETURNING *",
      [fullname, email, hashPassword]
    );
    const user = newUser.rows[0]
    const token = jwt.sign({userId:user.id},process.env.ACCESS_TOKEN,{expiresIn: '30m'})
    const refreshToken = jwt.sign({userId:user.id},process.env.REFRESH_TOKEN,{expiresIn:'24hr'})
    res.status(201).json({
      message: 'User registered successfully.',
      token,
      refreshToken,
      username: user.username,
    });
  } catch (error) {
    console.log("There was an error signing up", error);
    res.status(500).json({error: 'Server error.'})
  }
});

// reactjs nextjs typescript redux tailwind

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password){
      return res.status(400).json({message:'Please provide your details'})
    }
    const checkUser = await pool.query(
      "SELECT * FROM users_information WHERE email_address = $1",
      [email]
    );
    if (checkUser.rows.length == 0) {
      res.status(401).json({ message: "User does not exist" });
    }
    
    const user = checkUser.rows[0]

    const isValid = await bcryptjs.compare(
      password,user.password
    );

    if (!isValid) return res.status(400).json({ error: "Invalid Credentials" });

    const token = jwt.sign(
      { email: user.email },process.env.ACCESS_TOKEN,{ expiresIn:"1hr" }
    );

    const refreshToken = jwt.sign({userId: user.email},process.env.REFRESH_TOKEN,{expiresIn:'1hr'})
    
    res.status(201).json({
      message: 'User registered successfully.',
      token,
      refreshToken,
      username: user.fullname,
    });
  } catch (error) {
    console.error('Login error',error.message)
    res.status(500).json({error: 'Server error.'})
  }
});

const verifyToken = (req, res, next) => {
  const authHeader = req.header("authorization");
  const token = authHeader && authHeader.split('')[1]
  if (!token) return res.status(403).json({ error: "Access denied" });


  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token.' });
    }
    // Attach the decoded payload (e.g., userId) to the request object
    req.user = decoded;
    next();
  });
}


//Protected Route

router.get("/dashboard", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id
    const userQuery = await pool.query(
      "SELECT * FROM users_information  WHERE id = $1",
      [userId]
    );
    
    if(userQuery.rows.length === 0){
      return res.status(404).json({error: 'User not found.'})
    }

    const username = userQuery.rows[0].fullname;
    res.status(200).json({message: `Welcome to your ${username}!`})
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});



export default router;
