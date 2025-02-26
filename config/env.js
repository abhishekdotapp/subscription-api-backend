import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT
const DB_URI = process.env.DB_URI
const NODE_ENV = process.env.NODE_ENV
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
export {PORT,NODE_ENV, DB_URI, JWT_SECRET, JWT_EXPIRES_IN};