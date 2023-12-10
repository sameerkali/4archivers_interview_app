const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs');

dotenv.config();
const port = process.env.PORT || 6969;
const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGOURI;

//mongo
mongoose
  .connect(mongoURI)
  .then(console.log("mongoose connected"))
  .catch((err) => console.log(err));

const signInSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const SignInModel = mongoose.model("SignInModel", signInSchema)


//mongo end

//register
app.post('/register', async(req, res) => {
    const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new SignInModel({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json('User created successfully!');
  } catch (error) {
    console.log("sameer bhai error ye hi hai signupka ============", error);
  }
})
//login
app.post('/login', async(req, res) => {
    const { email, password } = req.body;
  try {
    const validUser = await SignInModel.findOne({ email });
    if (!validUser) return console.log(404, 'User not found!');
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return console.log(401, 'Wrong credentials!');
    if (validPassword) return console.log(201, 'login successful!');
    
  } catch (error) {
    console.log("sameer bhai error ye hi hai signin ============", error);
  }
})




app.listen(port, () => {
  console.log(`listening on ${port}`);
});
