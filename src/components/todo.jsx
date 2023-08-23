const Todo = ({ todo, deleteTodo, updateTodo}) => {
    const { id, title, descripcion, state, priority } = todo;

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start bg-todos">
            <div>
                <h5 className={`${state && "text-decoration-line-through"}`}>
                    {title}
                </h5>
                <p>{descripcion}</p>
                <div className="d-flex gap-2">
                    <button
                        onClick={() => deleteTodo(id)}
                        className="btn btn-sm btn-dan"
                    >
                        Eliminar
                    </button>
                    <button 
                        className="btn btn-sm btn-in"
                        onClick={() => updateTodo(id)}
                    >
                        Terminar
                    </button>
                </div>
            </div>
            <span className="badge bg-primary rounden-pill">
                {priority && "Prioridad"}
            </span>
        </li>
    );
};

export default Todo;
