import mongoose from "mongoose";


export const connectDb= async()=>{
    try {
        const connect=await mongoose.connect(`${process.env.URL}`)
        console.log(`Mongo db connection established on Host ${connect.connection.host}`);
        
    } catch (error) {
        console.log("MongoDb Error ",error);
        process.exit(1);        
    }
}