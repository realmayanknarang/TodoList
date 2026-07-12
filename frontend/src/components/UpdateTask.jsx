import "../style/addtask.css"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateTask() {
    const [taskData, setTaskData] = useState({});
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingTask, setLoadingTask] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:3200/tasks")
            .then(r => r.json())
            .then(d => {
                if (d.success) {
                    const task = d.result.find(t => t._id === id);
                    if (task) {
                        setTaskData({ title: task.title, description: task.description });
                    } else {
                        setApiError("Task not found");
                    }
                } else {
                    setApiError("Failed to load task");
                }
            })
            .catch(() => setApiError("Network error"))
            .finally(() => setLoadingTask(false));
    }, [id]);

    const validate = () => {
        const errs = {};
        if (!taskData.title?.trim()) errs.title = "Title is required";
        if (!taskData.description?.trim()) errs.description = "Description is required";
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleUpdateTask = async () => {
        setApiError("");
        if (!validate()) return;
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:3200/update/${id}`, {
                method: "PUT",
                body: JSON.stringify(taskData),
                headers: { "Content-Type": "application/json" }
            });
            const result = await res.json();
            if (result.success) {
                navigate("/");
            } else {
                setApiError(result.message || "Failed to update task");
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

    if (loadingTask) return <div className="container"><h2>Update Task</h2><p>Loading...</p></div>;

    return (
        <div className="container">
            <h2>Update Task</h2>
            {apiError && <div className="error-banner">{apiError}</div>}
            <label htmlFor="taskName">Title</label>
            <input
                className={errors.title ? "input-error" : ""}
                value={taskData.title || ""}
                onChange={(e) => handleChange("title", e.target.value)}
                type="text" name="title" placeholder="Enter Task Title"
            />
            {errors.title && <span className="field-error">{errors.title}</span>}
            <label htmlFor="taskDescription">Description</label>
            <textarea
                className={errors.description ? "input-error" : ""}
                value={taskData.description || ""}
                rows={4}
                onChange={(e) => handleChange("description", e.target.value)}
                name="description" placeholder="Enter Task Description"
            />
            {errors.description && <span className="field-error">{errors.description}</span>}
            <button onClick={handleUpdateTask} type="submit" disabled={loading}>
                {loading ? "Updating..." : "Update Task"}
            </button>
        </div>
    );
}
export default UpdateTask;
