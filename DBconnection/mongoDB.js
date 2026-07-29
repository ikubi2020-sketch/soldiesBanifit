import { MongoClient } from "mongodb"


const client = new MongoClient(process.env.MONGO_URL)

try {
    await client.connect()
    console.log("mongo connected")
} catch (error) {
    console.log(error)
}

console.log("mongo is connected");


const db = client.db("welfare record")

export default db