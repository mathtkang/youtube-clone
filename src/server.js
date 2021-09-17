import express from "express";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const home = (req, res) => {
    return res.send("hello");
};

const login = (req, res) => {
    return res.send("login");
};

app.use(logger)
app.get("/", home);
app.get("/login", login);

const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

