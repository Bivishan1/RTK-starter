//importing two methods : createSlice, nanoid(to generate ids for any arrays or values list)
import { createSlice } from "@reduxjs/toolkit";

//initialState can be any array or object, but we are using object
const initialState = {
    todos: [ {id:1, text: 'Hello World'}]
}

// a expanded part of reducer is slice
//so we will create slice method with 'createSlice' method which only takes an object
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    // now reducers property to work well in redux, which takes property and function in object
    reducers: {
        
    }

})