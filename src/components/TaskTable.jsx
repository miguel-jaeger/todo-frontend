import React from "react";

function TaskTable({ tasks, onDelete }) {
    return (
        <div className="card shadow-sm">
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table table-hover table-striped mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Descripción</th>
                                <th>Fecha Inicio</th>
                                <th>Fecha Fin</th>
                                <th>Responsable</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tasks.map(task => (
                                <tr key={task.id}>
                                    <td>{task.id}</td>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.dateBegin?.split("T")[0]}</td>
                                    <td>{task.dateEnd?.split("T")[0]}</td>
                                    <td>{task.owner}</td>

                                    <td>
                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => onDelete(task.id)}
                                        >
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default TaskTable;
