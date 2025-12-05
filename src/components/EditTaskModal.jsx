import React, { useState, useEffect } from "react";

function EditTaskModal({ task, onUpdate }) {
    const [form, setForm] = useState(task);

    useEffect(() => setForm(task), [task]);

    const handleChange = e =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = () => {
        onUpdate(form);
    };

    return (
        <div className="modal fade" id="editTaskModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">Editar Tarea</h5>
                        <button className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">

                        <div className="mb-3">
                            <label className="form-label">Título</label>
                            <input
                                name="title"
                                value={form?.title || ""}
                                onChange={handleChange}
                                className="form-control"
                                type="text"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Descripción</label>
                            <textarea
                                name="description"
                                value={form?.description || ""}
                                onChange={handleChange}
                                className="form-control"
                                rows="3"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Fecha</label>
                            <input
                                name="dateBegin"
                                value={form?.dateBegin ? form.dateBegin.split("T")[0] : ""}
                                onChange={handleChange}
                                className="form-control"
                                type="date"
                            />
                        </div>

                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>
                            Guardar Cambios
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EditTaskModal;
