//importing two methods : createSlice, nanoid(to generate ids for any arrays or values list)
import { createSlice, nanoid } from "@reduxjs/toolkit";

//initialState can be any array or object, but we are using object, so it's our initialState (state) of our slice
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

// a expanded part of reducer is slice
//so we will create slice method with 'createSlice' method which only takes an object
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // now reducers property to work well in redux, which takes property and function in object
  //state props gives access to state or situation or condition of initialState while action provide a access to certain values like id while i call that  removeTodo
  // these reducers functions i.e. adToDo, removeToDo & updateToDO, are used to update the state,
  reducers: {
    //function declaration & definitions
    // state Represents the current state of your slice before the action is applied., actions defines jun hamiley data passing gariraxau with payload to update our state,,
    addToDo: (state, action) => {
      //now creating todo, as we already pass object in initialState, so in todo here we need to pass object
      const todo = {
        id: nanoid(),
        text: action.payload, //since payload is itself object, we can access anything data of state by dot(.) annotation , e.g. id,email etc., with payload.id, payload.text(here .text is not required because we already assigned in text property i.e. text:)
      };
      console.log(todo.text, ": checking data");
      state.todos.push(todo); //we always do this in last , in todo object we can do other things like fetching api, fetching data n then add with push method (we use push method because we create array in our initialState) in our state. or add property (using object technique) if we create object in our initialState.
    },
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        // so, here action.payload automatically match with the id  of the action payload e.g. removeToDo(1), so 1 will be id and will be filter out.
        todo.id !== action.payload;
      });
    },
    updateToDo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});

// just pass in the object, which functions we have created inside the reducers and it export to other components
//in todoSlice.actions, actions is like all reducer functions
export const { addToDo, removeToDo, updateToDo } = todoSlice.actions;

// now, store also needs to aware all the reducers we have created above, otherwise it won't able to maintain the store
// and it won't take value from anywhere to update the value or state instead it only update the value which is registered inside of it. which mean
//jun jun reducer store ma update or register xa, store ley tehi sanga matrai value liyera update garxa,
//that's why it needs all the reducers list, which will be useful in reducer
export default todoSlice.reducer;
//if we have other slide like authSlice, registerSlice, we have to export all here,, like we did above for todoSlice.
