import e from "express";
import { connection, collectionName } from "./dbconfig.js";
import cors from "cors";
import { ObjectId } from "mongodb";

const app = e();

app.use(cors());
app.use(e.json());

app.post("/add-task", async (req, res) => {
    try {
        const db = await connection();
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(req.body);
        res.send({
            message: "Todo added successfully",
            success: true,
            data: result
        });
    } catch (error) {
        res.status(500).send({
            message: "Error adding todo",
            success: false,
            error: error.message
        });
    }
});

app.get("/tasks", async (req, res) => {
    try {
        const db = await connection();
        const collection = db.collection(collectionName);
        const result = await collection.find().toArray();
        res.send({
            message: "Tasks retrieved successfully",
            success: true,
            result: result
        });
    } catch (error) {
        res.status(500).send({
            message: "Error retrieving tasks",
            success: false,
            error: error.message
        });
    }
});


app.delete("/delete/:id", async (req, res) => {
    try {
        const db = await connection();
        const collection = db.collection(collectionName);
        const id = req.params.id;
        const result = await collection.deleteOne({ _id: new ObjectId(id)  });
        res.send({
            message: "Task deleted successfully",
            success: true,
            data: result
        });
    } catch (error) {
        res.status(500).send({
            message: "Error deleting task ",
            success: false,
            error: error.message
        });
    }
});


app.listen(3200, () => {
  console.log("Server is running on port 3200");
});