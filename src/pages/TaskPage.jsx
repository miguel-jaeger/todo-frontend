import React, { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../services/TaskService";
import TaskTable from "../components/TaskTable";
import AddTaskModal from "../components/AddTaskModal";
import EditTaskModal from "../components/EditTaskModal";
import { Modal } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function TaskPage() {
    const [tasks, setTasks] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);

    const loadTasks = () => {
        getTasks().then(res => setTasks(res.data));
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const handleSave = (task) => {
        createTask(task).then(loadTasks);
    };

    const handleEdit = (task) => {
        setTaskToEdit(task);
    };

    const handleUpdate = (updatedTask) => {
        updateTask(updatedTask.id, updatedTask).then(loadTasks);
    };

    const handleDelete = (id) => {
        deleteTask(id).then(loadTasks);
    };

    const toggleStatus = (task) => {
        const updated = { ...task, status: task.status === "completada" ? "pendiente" : "completada" };
        updateTask(task.id, updated).then(loadTasks);
    };

    return (
        <div className="container py-5">

            <div className="d-flex justify-content-between mb-4">
                <h1 className="display-5 fw-bold">Listado de Tareas</h1>

                <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addTaskModal"
                >
                    Agregar Tarea
                </button>
            </div>

            <TaskTable
                tasks={tasks}
                onEdit={(task) => {
                    handleEdit(task);
                    const modal = new Modal(document.getElementById('editTaskModal'));
                    modal.show();
                }}
                onDelete={handleDelete}
                onToggleStatus={toggleStatus}
            />

            <AddTaskModal onSave={handleSave} />
            <EditTaskModal task={taskToEdit} onUpdate={handleUpdate} />

        </div>
    );
}

export default TaskPage;
