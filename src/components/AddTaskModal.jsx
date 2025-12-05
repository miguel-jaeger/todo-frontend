import React, { useState } from "react";

function AddTaskModal({ onSave }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        dateBegin: "",
        dateEnd: "",
        status: "pendiente",
        owner: ""
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        onSave(form);
        setForm({
            title: "",
            description: "",
            dateBegin: "",
            dateEnd: "",
            status: "pendiente",
            owner: ""
        });
    };

    return (
        <div className="modal fade" id="addTaskModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">Agregar Nueva Tarea</h5>
                        <button className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">

                        {/* Título */}
                        <div className="mb-3">
                            <label className="form-label">Título</label>
                            <input
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                className="form-control"
                                type="text"
                                placeholder="Título de la tarea"
                            />
                        </div>

                        {/* Descripción */}
                        <div className="mb-3">
                            <label className="form-label">Descripción</label>
                            <textarea
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                className="form-control"
                                rows="3"
                            />
                        </div>

                        {/* Fecha inicio */}
                        <div className="mb-3">
                            <label className="form-label">Fecha de inicio</label>
                            <input
                                name="dateBegin"
                                value={form.dateBegin}
                                onChange={handleChange}
                                className="form-control"
                                type="date"
                            />
                        </div>

                        {/* Fecha de fin */}
                        <div className="mb-3">
                            <label className="form-label">Fecha de fin</label>
                            <input
                                name="dateEnd"
                                value={form.dateEnd}
                                onChange={handleChange}
                                className="form-control"
                                type="date"
                            />
                        </div>

                        {/* Owner */}
                        <div className="mb-3">
                            <label className="form-label">Responsable</label>
                            <input
                                name="owner"
                                value={form.owner}
                                onChange={handleChange}
                                className="form-control"
                                type="text"
                                placeholder="Nombre del responsable"
                            />
                        </div>

                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>
                            Guardar Tarea
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddTaskModal;
