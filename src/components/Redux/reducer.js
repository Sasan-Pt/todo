import {createReducer} from "@reduxjs/toolkit";
import {addtodo,deletetodo} from './actions'


const todo=createReducer([],
    {
        [addtodo]:(state,{payload})=>[ ...state,{id:Math.random(),payload}],
        [deletetodo]:(state,{payload})=>console.log(payload.key),
    }
    );
 export default todo
