const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/user");
const Sales = require("./db/sales");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  try {
    const { name, address, email, password } = req.body;
    if (!name || !address || !email || !password) {
      return res.status(400).send({ message: "All the fields are mandatory" });
    }
    let user = await User.findOne({ email });
    if (user) {
      return res.send({ message: "email is already registered" });
    }
    const newUser = new User({ name, address, email, password });
    const resp = await newUser.save();
    resp = resp.toObject();
    delete resp.password;
    res.status(200).send({ message: "User Created", resp });
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ resp: "no user found" });
    }
  } else {
    res.send({ resp: "no user found" });
  }
});

app.post("/", async (req, res) => {
  const sales = new Sales(req.body);
  let result = await sales.save();
  res.send(result);
});

app.get("/top_5_sales", async (req, res) => {
  try {
    const resp = await Sales.find().sort({ Amount: -1 });

    res.status(200).send(resp);
  } catch (error) {
    res.status(500).send({ message: "Error Occured", error });
  }
});
app.get("/today_total_revanue", async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const sales = await Sales.find({ createdAt: { $gte: today } });

    let revenue = 0;
    for(let sale of sales){
        revenue = revenue + parseInt(sale.Amount);

    };
    res.status(200).send({revenue} );
  } catch (error) {
    res.status(500).send({ message: "Error Occured", error });
  }
});
app.listen(5000,()=>{
  console.log("server start on port 5000")
});
