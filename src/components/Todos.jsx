import { useSelector, useDispatch } from "react-redux";
import { removeToDo } from "../features/toDo/todoSlice";
const Todos = () => {
  // now we acccess to all the list of todos arrays from our state in the slice.
  const todos = useSelector((state) => state.todos);
// testing to check whether todo.text has importing any value or not.
  // useEffect(()=> {
  //   todos.map((todo)=> console.log(todo.id,'useeffect id in todo.jsx'));
  // },[todos])
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Todos </h1>
      <ul className="list-none">
      {todos.map((todo) => (
        <li key={todo.id} className="mt-4 flex justify-between items-center bg-zinc-50 px-4 py-2 rounded">
          <p className="text-red-700">{todo.text}</p>
          {/* we can't just write onclick = {dispatch()} because inside onClick it's only allowed to provide reference e.g. onclick = {dispatch}, instead of dispatch() which is not allowed, and if you pass parameter with dispatch(input), it will run instantly and don't work properly while we pass the params, so to work with params in dispatch , we need to pass it as a callback and it works when we only click , which is only possible by callback . */}
          <button onClick={() => dispatch(removeToDo(todo.id))} className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">Delete</button>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default Todos;
