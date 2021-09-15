import express from "express";

const PORT = 4000;

const app = express(); //creates an express application

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const handleProtected = (req, res, next) => {
    const url = req.url;
    if(url === "/protected"){
        return res.send("<h1>Not Allowed</h1>");
    }
    console.log("Allowed, you may continue.");
    next();
};

const handleHome = (req, res) => {
    //responses를 종료시키는 방법 2가지(end, send)
    return res.send("I love middlewares");
};
// const handleAbout = (req, res) => {
//     return res.send("About here.");
// };
// const handleContact = (req, res) => {
//     return res.send("Contact here.");
// };
// const handleLogin = (req, res) => {
//     return res.send("Login here.");
// };
const handleProtected = (req, res) => {
    return res.send("Welcome to the private lounge.");
};




app.get("/", logger, handleHome);
// app.get("/about", handleAbout);
// app.get("/contact", handleContact);
// app.get("/login", handleLogin);
app.get("/protected", handleProtected);


const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

