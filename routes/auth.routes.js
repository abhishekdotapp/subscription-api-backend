import {Router} from "express"
import {signIn , signUp, signOut} from "../controllers/auth.controller.js"
const authRouter = Router();

authRouter.post('/sign-up',signUp);
authRouter.get('/sign-up', (req,res) => res.send("sign up page"));
authRouter.post('/sign-in', signIn);
authRouter.post('/sign-out', signOut);
export default authRouter