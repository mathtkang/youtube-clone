import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
// import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

import storyRouter from "./routers/storyRouter";

const PORT = 4000;

console.log(process.cwd());
const app = express();
const logger = morgan("dev");
app.set("view engine", "pug");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

app.use("/stories", storyRouter);

const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

