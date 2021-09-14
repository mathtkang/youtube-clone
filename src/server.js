import express from "express";

const PORT = 4000;

const app = express(); //creates an express application

const handleHome = () => console.log("Somebody is trying to go home.");

app.get("/", handleHome);

const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

