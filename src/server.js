import express from "express";

const PORT = 4000;

const app = express(); //creates an express application

const handleHome = (req, res) => {
    console.log(req);
    console.log(res);
    // return res.end(); //responses를 종료시키는 방법 2가지(end, send)
    return res.send("I still love you.");
};
const handleAbout = (req, res) => {
    return res.send("About here.");
};
const handleContact = (req, res) => {
    return res.send("Contact here.");
};
const handleLogin = (req, res) => {
    return res.send("Login here.");
};

app.get("/", handleHome);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", handleLogin);

const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

