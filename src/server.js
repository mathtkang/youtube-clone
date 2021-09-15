import express from "express";

const PORT = 4000;

const app = express(); //creates an express application

const URLLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}; //방문 중인 url 기록

const TimeLogger = (req, res, next) => {
    // req.time = Date.now();
    let now = new Date(); 
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    console.log(`시간 : ${year}년 ${month}월 ${date}일`);
    next();
}; //요청의 연도, 월, 일을 기록

const SecurityLogger = (req, res, next) => {
    if(req.protocol == "https"){
        console.log("Secure ⭕️");
    }else{
        console.log("Insecure ❌");
    }
    next();
}; //프로토콜이 https이면 secure로 기록, 그렇지 않으면 secure로 기록

const ProtectorMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected"){
        console.log("USER STOP.");
        return res.send("<h1>Not Allowed.</h1>");
    }
    console.log("Allowed, you may continue.");
    next();
};


const handleHome = (req, res) => {
    //responses를 종료시키는 방법 2가지(end, send)
    return res.send("I love middlewares.");
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
// const handleProtected = (req, res) => {
//     return res.send("Welcome to the private lounge.");
// };

app.use(URLLogger)
app.use(TimeLogger)
app.use(SecurityLogger)
app.use(ProtectorMiddleware)

app.get("/", handleHome);

// app.get("/about", handleAbout);
// app.get("/contact", handleContact);
// app.get("/login", handleLogin);
// app.get("/protected", handleProtected);


const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

