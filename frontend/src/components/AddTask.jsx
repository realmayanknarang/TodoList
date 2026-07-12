import "../style/addtask.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask() {
    const [taskData, setTaskData] = useState({});
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        const errs = {};
        if (!taskData.title?.trim()) errs.title = "Title is required";
        if (!taskData.description?.trim()) errs.description = "Description is required";
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleAddTask = async () => {
        setApiError("");
        if (!validate()) return;
        setLoading(true);
        try {
            const res = await fetch("http://localhost:3200/add-task", {
                method: "POST",
                body: JSON.stringify(taskData),
                headers: { "Content-Type": "application/json" }
            });
            const result = await res.json();
            if (result.success) {
                navigate("/");
            } else {
                setApiError(result.message || "Failed to add task");
            }
        } catch {
            setApiError("Network error. Please check if the server is running.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (field, value) => {
        setTaskData({ ...taskData, [field]: value });
        if (errors[field]) setErrors({ ...errors, [field]: "" });
    };

    return (
        <div className="container">
            <h2>Add Task Here</h2>
            {apiError && <div className="error-banner">{apiError}</div>}
            <label htmlFor="taskName">Title</label>
            <input
                className={errors.title ? "input-error" : ""}
                onChange={(e) => handleChange("title", e.target.value)}
                type="text" name="title" placeholder="Enter Task Title"
            />
            {errors.title && <span className="field-error">{errors.title}</span>}
            <label htmlFor="taskDescription">Description</label>
            <textarea
                className={errors.description ? "input-error" : ""}
                rows={4}
                onChange={(e) => handleChange("description", e.target.value)}
                name="description" placeholder="Enter Task Description"
            />
            {errors.description && <span className="field-error">{errors.description}</span>}
            <button onClick={handleAddTask} type="submit" disabled={loading}>
                {loading ? "Adding..." : "Add New Task"}
            </button>
        </div>
    );
}
export default AddTask;
