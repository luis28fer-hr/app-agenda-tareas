import { useRef, useState } from "react";

const NoControlado = () => {


    const form = useRef(null);
    const [error, setError] = useState("");

    const handleSutmit = (e) => {
        e.preventDefault();
        setError('');

        //capturar los datos
        const data = new FormData(form.current);
        const { title, descripcion, state } = Object.fromEntries([
            ...data.entries(),
        ]);
    
        //validad los datos

        if(!title.trim() || !descripcion.trim() || !state.trim()) return setError("LLena todos los campos");
        //enviar los datos
        console.log(title, descripcion, state);

    };  

    return (
        <form onSubmit={handleSutmit} ref={form}>
            <input 
                type="text" 
                placeholder="Ingrese Todo" 
                className="form-control mb-2" 
                name="title"
                defaultValue="Titulo 1"
            />
            <textarea 
                className="form-control mb-2" 
                placeholder="Ingrese descripcion"
                name="descripcion"
                defaultValue= "Descripcion 1"
            />
            <select className="form-select mb-2" name="state">
                <option value="Pendiente">Pendiente</option>
                <option value="Compleado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button>

            {
                error !== '' && error
            }
        </form>
    );
};

export default NoControlado;