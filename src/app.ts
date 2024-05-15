import express from "express";
import UserRouter from "./routes/user.route";
import AuthRouter from "./routes/auth.route";
import AppDataSource from "./database/db.config";
import 'dotenv/config'

const app = express();

// Express json middleware for parsing json to js object (req.body)
app.use(express.json());


app.use("/", AuthRouter);
app.use("/accounts", UserRouter);


AppDataSource.initialize().then(() => {
    console.log("Database has been initilazied");
}).catch((error) => {
    console.log("Database Initilization Failed!!", error);
})


app.listen(3000, () => {
    console.log("Server has Started On Port 3000");
})