import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assest/style.css";

const TodoList = () => {
  const [jobs, setJobs] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    axios.get(`https://localhost:44353/api/Home/task`).then((res) => {
      console.log("res", res);
      const resData = res.data;
      console.log("List", resData);
      setJobs(resData);
    });
  }, []);

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJob = [...prev, todo];

      const jsonJob = JSON.stringify(newJob);

      localStorage.setItem("jobs", jsonJob);
      console.log(jsonJob);

      return newJob;
    });
    setTodo("");
  };

  return (
    <div style={{ padding: 32 }}>
      <div className="mb-3">
        <input
          id="todolist"
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
      </div>

      <button onClick={handleSubmit}>Add</button>

      <h1>Danh sách việc cần làm</h1>
      <ul>
        {jobs.map((job, index) => (
          <li key={index} id={job.taskId}>
            {job.taskName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
