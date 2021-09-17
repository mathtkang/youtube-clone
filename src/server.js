import express from "express";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger)

// global router
const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

// users router
const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

// videos router
const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

