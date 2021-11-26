const express = require("express");
// var bodyParser = require("body-parser")
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn.js");
const Register = require("./models/registers");
const Quiz = require("./models/quiz");
const Essay = require("./models/essay");
const Response = require("./models/userResponse");
const md5 = require("md5");
const port = process.env.PORT || 3000;
// always use double underscore while giving the dirname name path.
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
const { Timer } = require('timer-node');
var datetime = new Date();
    console.log(datetime);

// this console command is to show the folder,file structure
// console.log(path.join(__dirname,"../public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(static_path));
app.use(express.static(__dirname + '/public'));
// app.use('/',Register);
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("register");
});
app.get("/login", (req, res) => {
    res.render("login");
});
app.get("/permission", (req, res) => {
    res.render("permission");
});
app.get("/instructions", (req, res) => {
    res.render("instructions");
});
app.get("/table", (req, res) => {
    res.render("table");
});
app.get("/mcq", (req, res) => {
    res.render("mcq");
});
app.get("/essay", (req, res) => {
    res.render("essay");
});
app.get("/final", (req, res) => {
    res.render("final");
});
app.get("/quiz", (req, res) => {
    res.render("quiz");
});

// app.get("./register",(req,res)=>{
//     res.render("register");
// })
// create new user database
app.post("/", async (req, res) => {
    try {
        // console.log(req.body.firstname);
        // res.send(req.body.firstname); 
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if (password === cpassword) {


        } else {
            res.send("password are not matching")
        }
    } catch (error) {
        res.status(400).send(error);
    }
})
app.post('/register', async (req, res) => {
    try {
        const { firstname, myemail, mypassword } = req.body;
        const email=myemail
        const password=md5("mypassword");
        console.log(req.body);
        console.log({email, password, firstname, datetime});
        const user = await Register.findOne({ email });
        console.log(user);
        if (user != null) {
            // res.status(403).json({ message: 'user already exists' });
            alert("already registered")
        }
        else{
        const newUser = new Register({ email, password, confirmpassword: password, username: firstname })
        await newUser.save()
        res.redirect("/mcq")
        app.post('/mcq', async (req, res) => {
            let {ans1}=req.body
            console.log({ans1})
            console.log(req.body.ans1);
            res.redirect("/essay")
        // res.status(201).json({ message: 'User registered' })
        console.log("hello")
        app.post('/essay', async (req, res) => {
            const {essay}=req.body
            const newEssay=new Response({_id:newUser._id,email,useranswer:ans1,questionid:1,userDescription:essay,question:"Which program is used by web clients to view the web pages?"})
            await newEssay.save()
            })})
    } }catch (e) { console.error(e); res.json(e) }
})
const timer = new Timer({
    label: 'test-timer',
    startTimestamp: 1563074001233 // 2019-07-14 03:13:21.233Z
  });
  console.log(timer.isStarted()); // true
//   console.log(timer.time()); // { d: 619, h: 16, m: 26, s: 11, ms: 207 }
//   console.log(timer.isStarted());
//   console.log(timer.isPaused()); 
//   timer.resume();
//   timer.isRunning();
//   console.log(timer.ms());
//   console.log(timer.pauseMs());
//   console.log(timer.pauseCount());
//   console.log(timer.isStopped());
//   timer.stop();
 
  
app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})

  console.log(timer.stoppedAt());