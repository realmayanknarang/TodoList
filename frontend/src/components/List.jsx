import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/list.css";

export default function List() {
  const [taskData, setTaskData] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("q", search);
    params.set("page", page);

    fetch(`http://localhost:3200/tasks?${params}`)
      .then(r => r.json())
      .then(d => {
        if (d.success) {
          setTaskData(d.result);
          setTotal(d.total);
          setTotalPages(d.totalPages);
          setError("");
        } else {
          setError("Failed to load tasks");
        }
      })
      .catch(() => setError("Network error. Please check if the server is running."))
      .finally(() => setInitialLoading(false));
  }, [search, page]);

  const handleSearch = () => {
    setSearch(searchInput);
    setPage(1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const deleteTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:3200/delete/${id}`, { method: "DELETE" });
      const item = await res.json();
      if (item.success) {
        const params = new URLSearchParams();
        if (search) params.set("q", search);
        params.set("page", page);
        const refreshed = await fetch(`http://localhost:3200/tasks?${params}`).then(r => r.json());
        if (refreshed.success) {
          setTaskData(refreshed.result);
          setTotal(refreshed.total);
          setTotalPages(refreshed.totalPages);
          setError("");
        }
      } else {
        setError("Failed to delete task");
      }
    } catch {
      setError("Network error while deleting task");
    }
  };

  const toggleTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:3200/toggle/${id}`, { method: "PUT" });
      const item = await res.json();
      if (item.success) {
        const params = new URLSearchParams();
        if (search) params.set("q", search);
        params.set("page", page);
        const refreshed = await fetch(`http://localhost:3200/tasks?${params}`).then(r => r.json());
        if (refreshed.success) {
          setTaskData(refreshed.result);
          setTotal(refreshed.total);
          setTotalPages(refreshed.totalPages);
          setError("");
        }
      }
    } catch {
      setError("Network error while updating task");
    }
  };

  if (initialLoading) return (
    <div>
      <h2>Task List</h2>
      <p className="status-msg">Loading tasks...</p>
    </div>
  );

  if (error && !taskData.length && !search) return (
    <div>
      <h2>Task List</h2>
      <p className="status-msg error-msg">{error}</p>
    </div>
  );

  return (
    <div>
      <h2>Task List</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
        {search && <button className="clear-btn" onClick={() => { setSearchInput(""); setSearch(""); setPage(1); }}>Clear</button>}
      </div>
      {error && <p className="status-msg error-msg">{error}</p>}
      {!taskData.length ? (
        <p className="status-msg">{search ? "No tasks match your search." : "No tasks yet. Add one!"}</p>
      ) : (
        <>
          <ul className="task-list">
            <li className="list-header">Done</li>
            <li className="list-header">Title</li>
            <li className="list-header">Description</li>
            <li className="list-header">Actions</li>
            {taskData.map((item) => (
              <Fragment key={item._id}>
                <li className="list-item"><input type="checkbox" checked={!!item.completed} onChange={()=>toggleTask(item._id)} className="checkbox" /></li>
                <li className={`list-item ${item.completed ? "completed" : ""}`}>{item.title}</li>
                <li className={`list-item ${item.completed ? "completed" : ""}`}>{item.description}</li>
                <li className="list-item actions-cell"><Link to={`/update/${item._id}`}><button className="edit">Edit</button></Link><button onClick={()=>deleteTask(item._id)} className="danger">Delete</button></li>
              </Fragment>
            ))}
          </ul>
          {totalPages > 1 && (
            <div className="pagination">
              <button disabled={page <= 1} onClick={() => setPage(p => p - 1)}>Previous</button>
              <span className="page-info">Page {page} of {totalPages} ({total} tasks)</span>
              <button disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>Next</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
