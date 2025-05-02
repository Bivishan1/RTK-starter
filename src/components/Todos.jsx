import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Todos = () => {
  // now we acccess to all the list of todos arrays from our state in the slice.
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Todos </h1>
      {todos.map((todo) => {
        <li key={todo.id}>
          <p>{todo.text}</p>
          {/* we can't just write onclick = {dispatch()} because inside onClick it's only allowed to provide reference e.g. onclick = {dispatch}, instead of dispatch() which is not allowed, and if you pass parameter with dispatch(input), it will run instantly and don't work properly while we pass the params, so to work with params in dispatch , we need to pass it as a callback and it works when we only click , which is only possible by callback . */}
          <button onClick={() => dispatch()}>Delete</button>
        </li>;
      })}
    </div>
  );
};

export default Todos;
