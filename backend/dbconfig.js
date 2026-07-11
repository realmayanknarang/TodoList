import { MongoClient } from "mongodb"

const url = "mongodb+srv://realmayanknarang_db_user:9auBa5oNVdxcW7IZ@cluster0.pdw4xwt.mongodb.net/?serverSelectionTimeoutMS=5000&connectTimeoutMS=5000"
const dbname = "todo"
export const collectionName = "todo"
const client = new MongoClient(url)

export const connection = async () => {
    await client.connect()
    return client.db(dbname)
}