import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        title: "",
        descripcion: "",
        state: "Pendiente",
        priority: true,
    });

    const { title, descripcion, state, priority } = todo;

    const handleSutmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !descripcion.trim()) {
            return Swal.fire({
                title: "Error!",
                text: "Título y descripción son obligatorios",
                icon: "error",
            });
        }

        addTodo({
            id: Date.now(),
            ...todo,
            state: state === "Completado",
        });

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Tarea agregada con éxito",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;

        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    return (
        <form onSubmit={handleSutmit}>
            <input
                type="text"
                placeholder="Titulo de tarea"
                className="form-control mb-2"
                name="title"
                onChange={handleChange}
            />
            <textarea
                className="form-control mb-2"
                placeholder="Descripcion de tarea"
                name="descripcion"
                onChange={handleChange}
            />
            <div className="form-check mb-2">
                <input
                    type="checkbox"
                    name="priority"
                    className="form-check-input"
                    id="inputCheck"
                    checked={priority}
                    onChange={handleChange}
                />
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>
            <select
                className="form-select mb-2"
                name="state"
                value={state}
                onChange={handleChange}
            >
                <option value="Pendiente">Pendiente</option>
                <option value="Compleado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">
                Agregar Tarea
            </button>
        </form>
    );
};

export default Formulario;
