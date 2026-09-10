import React, { useState } from "react";
import "./TodoApp.css";

const TodoApp = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    // ADD TASK
    const addTask = () => {
        if (task.trim() === "") return;

        setTasks(previous => [
            ...previous,
            {
                text: task,
                completed: false
            }
        ]);

        setTask("");
    };

    // COMPLETE TASK
    const completeTask = (index) => {
        setTasks(previous =>
            previous.map((item, i) =>
                i === index
                    ? { ...item, completed: !item.completed }
                    : item
            )
        );
    };

    // EDIT TASK
    const editTask = (index) => {
        const newTask = prompt(
            "Edit your task:",
            tasks[index].text
        );

        if (newTask !== null && newTask.trim() !== "") {
            setTasks(previous =>
                previous.map((item, i) =>
                    i === index
                        ? { ...item, text: newTask }
                        : item
                )
            );
        }
    };

    // DELETE TASK
    const deleteTask = (index) => {
        setTasks(previous =>
            previous.filter((_, i) => i !== index)
        );
    };

    return (
        <div className="todo-container">

            <h1>To-Do App</h1>

            <div className="input-area">
                <input
                    className="task-input"
                    type="text"
                    value={task}
                    onChange={(event) =>
                        setTask(event.target.value)
                    }
                    placeholder="Enter Task"
                />

                <button
                    className="add-btn"
                    onClick={addTask}
                >
                    ADD
                </button>
            </div>

            <ul className="task-list">

                {tasks.map((item, index) => (

                    <li className="task-item" key={index}>

                        <span
                            className={
                                item.completed
                                    ? "completed-task"
                                    : ""
                            }
                        >
                            {item.text}
                        </span>

                        <div className="button-group">

                            <button
                                className="complete-btn"
                                onClick={() =>
                                    completeTask(index)
                                }
                            >
                                {item.completed
                                    ? "COMPLETED"
                                    : "COMPLETE"}
                            </button>

                            <button
                                className="edit-btn"
                                onClick={() =>
                                    editTask(index)
                                }
                            >
                                EDIT
                            </button>

                            <button
                                className="delete-btn"
                                onClick={() =>
                                    deleteTask(index)
                                }
                            >
                                DELETE
                            </button>

                        </div>

                    </li>

                ))}

            </ul>

        </div>
    );
};

export default TodoApp;
