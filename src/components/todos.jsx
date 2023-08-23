import Todo from "./todo";

const Todos = ({ todos, deleteTodo, updateTodo}) => {

    return (
        <div className="mt-5">
            <h2 className="text-center">Tareas</h2>
            <ul className="list-group mt-4 bg-todo">
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        updateTodo = {updateTodo}
                    />
                ))}
                {todos.length === 0 && (<li className="list-group-item text-center bg-todos">Sin Tareas</li>
                )}
            </ul>
        </div>
    );
};

export default Todos;