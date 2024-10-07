import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect("mongodb+srv://akkies445:akkies123@cluster0.isjvkpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Food").then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
