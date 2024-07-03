import mongoose from "mongoose";

const connectDb=(uri:string)=>{
    mongoose.connect(uri,{dbName:"graphqlDb"}).then((conn)=>{
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }).catch((err)=>{
        console.log(err);
    })
}

export default connectDb;