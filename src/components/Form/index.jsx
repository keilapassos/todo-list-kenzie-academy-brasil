import { useState } from "react";
import "./style.css";

const Form = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="divForm">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(userInput);
        }}
      >
        <input
          type="text"
          placeholder="Nova tarefa"
          value={userInput}
          onChange={(event) => {
            setUserInput(event.target.value);
          }}
        />
        <button className="send" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;

// recebe os dados inseridos pelo usuário, e ter o botão "Enviar"
// que fará a iteração no nosso state
