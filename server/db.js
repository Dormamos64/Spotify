import mongoose from "mongoose";

export default async function conectaNaDb() {
  mongoose.connect(
    "mongodb+srv://ADM:ADM@cluster0.nzzkr.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0"
  )

  return mongoose.connection;
}
