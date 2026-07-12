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
        const result = await collection.insertOne({ ...req.body, completed: false });
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
        const { q, page = "1", limit = "5" } = req.query;
        const pageNum = Math.max(1, parseInt(page));
        const limitNum = Math.max(1, Math.min(50, parseInt(limit)));

        let filter = {};
        if (q) {
            filter = {
                $or: [
                    { title: { $regex: q, $options: "i" } },
                    { description: { $regex: q, $options: "i" } }
                ]
            };
        }

        const total = await collection.countDocuments(filter);
        const result = await collection.find(filter)
            .skip((pageNum - 1) * limitNum)
            .limit(limitNum)
            .toArray();

        res.send({
            message: "Tasks retrieved successfully",
            success: true,
            result: result,
            total: total,
            page: pageNum,
            totalPages: Math.ceil(total / limitNum)
        });
    } catch (error) {
        res.status(500).send({
            message: "Error retrieving tasks",
            success: false,
            error: error.message
        });
    }
});


app.put("/update/:id", async (req, res) => {
    try {
        const db = await connection();
        const collection = db.collection(collectionName);
        const id = req.params.id;
        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { title: req.body.title, description: req.body.description } }
        );
        res.send({
            message: "Task updated successfully",
            success: true,
            data: result
        });
    } catch (error) {
        res.status(500).send({
            message: "Error updating task",
            success: false,
            error: error.message
        });
    }
});

app.put("/toggle/:id", async (req, res) => {
    try {
        const db = await connection();
        const collection = db.collection(collectionName);
        const id = req.params.id;
        const task = await collection.findOne({ _id: new ObjectId(id) });
        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { completed: !task.completed } }
        );
        res.send({
            message: "Task status toggled successfully",
            success: true,
            data: result
        });
    } catch (error) {
        res.status(500).send({
            message: "Error toggling task status",
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