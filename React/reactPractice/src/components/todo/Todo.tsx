import { useEffect, useState } from "react";

interface TodoItemProps {
  text: string;
}

const TodoItem = (props: TodoItemProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span style={isChecked ? { textDecoration: "line-through" } : {}}>
          {props.text}
        </span>
      </label>
    </div>
  );
};

const Todo = () => {
  const [allTodos, setAllTodos] = useState<Array<string>>(["Example 1"]);
  const [newTodo, setNewTodo] = useState("");
  const submitNewTodo = (e: React.FormEvent) => {
    e.preventDefault();
    setAllTodos([newTodo, ...allTodos]);
    setNewTodo("");
  };
  useEffect(() => {}, [allTodos]);
  return (
    <div>
      <h3>All TODOS</h3>
      {allTodos.map((todo: string, index: number) => {
        return <TodoItem key={index} text={todo} />;
      })}
      <hr style={{ marginTop: "5px" }} />
      <form id="addNewTodo" onSubmit={submitNewTodo}>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            style={{ marginTop: "5px" }}
          />
        </div>
        <div>
          <h3> Submit New Todo</h3>
          <input type="submit" value="Submit" style={{ marginTop: "5px" }} />
        </div>
      </form>
    </div>
  );
};

export default Todo;
