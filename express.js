// expresss 

// import express from "express";
// import path from "path";

// const app = express();

// using middlewares
// app.use(express.static(path.join(path.resolve(), "public")));

// app.use(express.urlencoded({ extended: true }));

// console.log(path.join(path.resolve(), "public"));

// setting up view engine

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
// res.send("Hello World");
//   res.sendStatus(404);
//   res.sendStatus(500);

// res.json({
//   success: true,
//   message: "Hello World",
// });

// res.status(200).send("OO YEAH")

// read file then send the file
// const file = fs.readFileSync("./index.html");

// console.log(path.resolve());
// const pathLocation = path.resolve();
// console.log(path.join(pathLocation, "./index.html"));
// res.sendFile(path.join(pathLocation, "./index.html"));
// res.render("index", { name: "MUhammad Ramzan " });

// res.sendFile("index.html");
//   res.render("index", { name: "Usman" });
// });

// for form
// const users = [];

// app.get("/", (req, res) => {
//   res.render("index", { name: "Usman" });
// });
// app.get("/success", (req, res) => {
//   res.render("success");
// });

// app.post("/contact", (req, res) => {
//   console.log("body  ==>", req.body);
//   users.push({ userName: req.body.name, email: req.body.email });
//   res.redirect("success");
// });

// app.get("/users", (req, res) => {
//   res.json({
//     users,
//   });
// });

// app.listen(5000, () => {
//   console.log("Server is running on port 5000");
// });
