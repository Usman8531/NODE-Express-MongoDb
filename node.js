// Core Node.Js

import http from "http";
// import * as myObj from "./features
// import fs from "fs";
import path from "path";
import { generatePercent } from "./features.js";

// const home = fs.readFile("./index.html", () => {
//   console.log("File readed");
// });

// console.log("Hello world");
// console.log(3);
// console.log("it's working");

//      Routing

// const http = require("http");
// const server = http.createServer((req, res) => {
//   //   console.log(req.url);
//   //     console.log("OO yeah");
//   //   res.end("<h1>Noice</h1>");
//   if (req.url === "/") {
//     res.end("<h1>Home Page</h1>");
//   } else if (req.url === "/about") {
//     res.end("<h1>About Page</h1>");
//   } else if (req.url === "/contact") {
//     res.end("<h1>Contact Page</h1>");
//   } else {
//     res.end("<h1>Page Not found</h1>");
//   }
// });
// server.listen(5000, () => {
//   console.log("it's working");
// });
// console.log(http);

// everyhing in node.js is module /

// there are three type of modules in node.js
// server is also module
// 1 ---> build in module
// 2 ---> third party module
// 3 ---> filebase module

// const myName = require("./features");
// const home = fs.readFileSync("./index.html");

// console.log(`you get${generatePercent()}`);
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     console.log(req.method);

//     // fs.readFile("./index.html", (err, home) => {
//     //   res.end(home);
//     //   console.log("File readed");
//     // });
//     res.end("home");
//   } else if (req.url === "/about") {
//     // res.end(`<h1>You get ${generatePercent()}</h1>`);
//     res.end("<h1>About Page</h1>");
//   } else if (req.url === "/contact") {
//     res.end("<h1>Contact Page</h1>");
//   } else {
//     res.end("<h1>Page Not found</h1>");
//   }
// });
// server.listen(5000, () => {
//   console.log("it's working");
// });

// console.log(path.extname("/home/random/index.js"));
// console.log(path.dirname("/home/random/index.js"));

// get =create data
// post = read data
// put =update data
// delete =delete data


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