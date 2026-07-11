import "../style/addtask.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask() {
    const [taskData, setTaskData] = useState({});
    const navigate = useNavigate();
    const handleAddTask = async () => {
        if (!taskData.title || !taskData.description) return;
        let result = await fetch("http://localhost:3200/add-task", {
            method: "POST",
            body: JSON.stringify(taskData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json();
        if (result.success) {
            navigate("/");
        }
    }
    return (
        <div className="container">
            <h2>Add Task Here</h2>
           
                <label htmlFor="taskName">Title</label>
                <input onChange={(event)=>{setTaskData({...taskData, title: event.target.value})}} type="text" name="title" placeholder='Enter Task Title' />
                <label htmlFor="taskDescription">Description</label>
                <textarea rows={4} onChange={(event)=>{setTaskData({...taskData, description: event.target.value})}} name="description" placeholder='Enter Task Description' />
                <button onClick={handleAddTask} type='submit'>Add New Task</button>     
        </div>
    );
}
export default AddTask; 
