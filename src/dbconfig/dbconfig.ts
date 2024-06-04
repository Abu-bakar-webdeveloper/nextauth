import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('Mongodb connected');

        })

        connection.on('error', (err) => {
            console.log('MOngodb connection error, please make sure db is up and runing', + err);
            process.exit()
        })
    } catch (error) {
        console.log(error, "something went wrong in connection to db")
    }
}