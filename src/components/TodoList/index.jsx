import "./style.css";

const TodoList = ({ todos, handleTodo }) => {
  return (
    <div className="divList">
      <ul className="insideList">
        {todos.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button className="ok" onClick={() => handleTodo(index)}>
                Concluir Tarefa
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
