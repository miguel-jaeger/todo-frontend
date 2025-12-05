import React from "react";

function TaskTable({ tasks, onEdit, onDelete, onToggleStatus }) {
    return (
        <div className="card shadow-sm">
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table table-hover table-striped mb-0">

                        <thead className="table-light">
                            <tr>
                                <th className="py-3 px-4">ID</th>
                                <th className="py-3 px-4 w-25">Título</th>
                                <th className="py-3 px-4 w-50">Descripción</th>
                                <th className="py-3 px-4">Fecha Inicio</th>
                                <th className="py-3 px-4">Fecha Fin</th>
                                <th className="py-3 px-4">Responsable</th>
                                <th className="py-3 px-4">Estado</th>
                                <th className="py-3 px-4">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tasks.map(task => (
                                <tr key={task.id}>

                                    {/* ID */}
                                    <td className="py-3 px-4">{task.id}</td>

                                    {/* Título */}
                                    <td className="py-3 px-4 fw-medium">{task.title}</td>

                                    {/* Descripción */}
                                    <td className="py-3 px-4 text-body-secondary">
                                        {task.description}
                                    </td>

                                    {/* Fecha Inicio */}
                                    <td className="py-3 px-4">
                                        {task.dateBegin?.split("T")[0]}
                                    </td>

                                    {/* Fecha Fin */}
                                    <td className="py-3 px-4">
                                        {task.dateEnd?.split("T")[0]}
                                    </td>

                                    {/* Responsable */}
                                    <td className="py-3 px-4">
                                        {task.owner}
                                    </td>

                                    {/* Estado (switch) */}
                                    <td className="py-3 px-4">
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={task.status === "completada"}
                                                onChange={() => onToggleStatus(task)}
                                            />
                                        </div>
                                    </td>

                                    {/* Acciones */}
                                    <td className="py-3 px-4">
                                        <div className="d-flex gap-1">
                                            <button
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={() => onEdit(task)}
                                            >
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>

                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => onDelete(task.id)}
                                            >
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
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
