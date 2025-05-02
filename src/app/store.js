import { configureStore } from "@reduxjs/toolkit"; //importing from reduxjs instead of react-redux
import todoReducer from '../features/toDo/todoSlice'; // (2nd step), importing reducer from slice 
// just pass keyvalue in configureStore
// 
export const store = configureStore({
    reducer: todoReducer //since, we can also pass list of object in  reducer but we only have one reducer in the slice
})