import React from "react";
import {useDispatch} from 'react-redux';
import { addToDo } from "../features/toDo/todoSlice";

const AddToDo = () => {
const [input, setInput] = React.useState('');
// to send the data to store, we need to dispatch from the useDispatch hook
// so, at first dispatch will use reducers to  send or add or change the data or value to the store
const dispatch = useDispatch();

const addSubmit = (e) => {
    e.preventDefault();
    //just pass the payload expecting in addToDo function 
    dispatch(addToDo(input))
    // to clear the field value after the add or submit to add the value
    setInput('');
}
    return (
    <div>
      <form onSubmit={addSubmit} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rouned border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="enter a todo.."
          value={input}
          onchange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {" "}
          Add Todo{" "}
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
