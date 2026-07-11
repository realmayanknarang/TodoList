import { Fragment, useEffect, useState } from "react";
import "../style/list.css";

export default function List() {
  const [taskData, setTaskData] = useState([]);
  const getListData = async () => {
      let list = await fetch("http://localhost:3200/tasks");
      list = await list.json();
      if (list.success) {
        setTaskData(list.result);
      }
    };
    
  useEffect(() => {
    getListData();
    
  }, []);
  const deleteTask = async (id) => {
      let item = await fetch(`http://localhost:3200/delete/${id}`, { method: "DELETE" });
      item = await item.json();
      if (item.success) {
        getListData()
      }
    }
  return (
    <div>
      <h2>Task List</h2>
      <ul className="task-list">
        <li className="list-header">S.no</li>
        <li className="list-header">Title</li>
        <li className="list-header">Description</li>
        <li className="list-header">Actions</li>
        {taskData &&
          taskData.map((item, index) => {
            return (
              <Fragment key={item._id}>
                <li className="list-item">{index + 1}</li>
                <li className="list-item">{item.title}</li>
                <li className="list-item">{item.description}</li>
                <li className="list-item"><button onClick={()=>deleteTask(item._id)} className="danger">Delete</button></li>
             
              </Fragment>
            );
          })}
      </ul>
    </div>
  );
}
