import { Nitro } from "nitropack";
import mongoose from "mongoose";

const config = useRuntimeConfig();

const options = {
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 15000 
}

const connectWithRetry = () => {
  console.log('MongoDB connection with retry')
  mongoose.connect(config.mongodbUri, options).then(()=>{
    console.log('MongoDB is connected')
  }).catch(err=>{
    console.log(`MongoDB connection unsuccessful, retry after 5 seconds. ${config.mongodbUri} - ${err}`)
    setTimeout(connectWithRetry, 5000)
  })
}




export default async (_nitroApp: Nitro) => {

  connectWithRetry()
};
