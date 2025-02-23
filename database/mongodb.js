import mongoose from "mongoose"
import { NODE_ENV, DB_URI} from "../config/env.js"

if(!DB_URI){
    throw new Error('Please define mongodb uri in environment variable')
}

const connectToDatabase = async() =>{
    try{
        await mongoose.connect(DB_URI);
        console.log(`connected mongodbb in ${NODE_ENV} `)
    } catch(error){
        console.log('Error connecting database',error);
        process.exit(1);
    }
}

export default connectToDatabase;