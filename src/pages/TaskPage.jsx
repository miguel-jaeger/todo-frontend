import React, { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask } from "../services/TaskService";
import TaskTable from "../components/TaskTable";
import AddTaskModal from "../components/AddTaskModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function TaskPage() {
    const [tasks, setTasks] = useState([]);

    const loadTasks = () => {
        getTasks().then(res => setTasks(res.data));
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const handleSave = (task) => {
        createTask(task).then(loadTasks);
    };

    const handleDelete = (id) => {
        deleteTask(id).then(loadTasks);
    };

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between mb-4">
                <h1 className="display-5 fw-bold">Listado de Tareas</h1>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addTaskModal">
                    Agregar Tarea
                </button>
            </div>

            <TaskTable
                tasks={tasks}
                onDelete={handleDelete}
            />

            <AddTaskModal onSave={handleSave} />
        </div>
    );
}

export default TaskPage;
