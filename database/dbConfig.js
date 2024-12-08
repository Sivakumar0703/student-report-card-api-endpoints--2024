import mongoose from "mongoose";

const connectionString = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.lysrb.mongodb.net/${process.env.DB_NAME}`;

async function connectDB(){
    try {
        await mongoose.connect(connectionString);
        console.log("Database Connected");
    } catch (error) {
        console.log("error in db connection".toUpperCase() , error);
    }
}

export default connectDB