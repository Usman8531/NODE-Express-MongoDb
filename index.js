import express from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { name } from "ejs";
// mongoDB
const mongoDB_URL =
  "mongodb+srv://usman853136:Password123@cluster0.2c9p9jz.mongodb.net/backend?retryWrites=true&w=majority";

mongoose
  .connect(mongoDB_URL)
  .then(() => {
    console.log("MongoDb Connected");
  })
  .catch((e) => console.log("error ==>" + e));

// schema
const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const usersModel = mongoose.model("user", usersSchema);

const app = express();
const PORT = 5000;

// Middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set("view engine", "ejs");

// Authentication
const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const decode = jwt.verify(token, "oo yeah");
    // console.log("decode", decode);
    req.user = await usersModel.findById(decode._id);
    next();
  } else {
    res.render("login");
  }
};

// Routes
// const users = [];

// app.get("/", (req, res) => {
//   console.log(req.cookies);
//   res.render("login");
// });
// app.get("/success", (req, res) => {
//   res.render("success");
// });
// app.get("/add", async (req, res) => {
//   await usersModel
//     .create({
//       name: "Mani",
//       email: "xcvkp@example.com",
//     })
//     .then(() => {
//       console.log("User added");
//     });

//   res.send("Nice!");
// });

// app.post("/success", (req, res) => {
//   const { name, email } = req.body;
//   // console.log("body  ==>", req.body);
//   const userData = { name, email };
//   usersModel.create(userData);
//   console.log(userData);
//   res.redirect("success");
// });

app.get("/logout", (req, res) => {
  res.cookie("token", null, {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.redirect("/");
});

app.get("/", isAuthenticated, (req, res) => {
  res.render("logout", { name: req.user.name });
});
app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await usersModel.findOne({ email });
  // console.log(user);

  if (!user) {
    return res.redirect("/register");
  } else {
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.render("login", { email, message: "Incorrect Password" });
    }
  }
  const token = jwt.sign({ _id: user._id }, "oo yeah");
  // console.log(token);
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    expires: new Date(Date.now() + 60 * 1000),
  });
  res.redirect("/");
});

app.post("/register", async (req, res) => {
  // console.log(req.body);
  const { name, email, password } = req.body;

  let user = await usersModel.findOne({ email });
  if (user) {
    // return console.log("Register first!");
    return res.redirect("/login");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  user = await usersModel.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign({ _id: user._id }, "oo yeah");
  // console.log(token);
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    expires: new Date(Date.now() + 60 * 1000),
  });
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});
