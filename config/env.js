import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT
const DB_URI = process.env.DB_URI
const NODE_ENV = process.env.NODE_ENV
export {PORT,NODE_ENV, DB_URI};