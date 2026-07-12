import { MongoClient } from "mongodb"
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGO_URI
const dbname = "todo"
export const collectionName = "todo"
const client = new MongoClient(url)

export const connection = async () => {
    await client.connect()
    return client.db(dbname)
}