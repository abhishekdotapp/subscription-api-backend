import express from "express"
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import userRouter from "./routes/user.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser)
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);

app.use(errorMiddleware)

app.get('/',(req,res) =>{
    res.send("welcome to the root path")
})

app.get("/about",(req,res) =>{
    res.send("about page this is")
})

app.listen(PORT, async ()=>{
    console.log(`server is listening at port${PORT}`)
    await connectToDatabase()
})  

export default app;