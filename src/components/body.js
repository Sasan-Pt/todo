import React, {useState} from 'react';
import {addtodo} from '../components/Redux/actions'
import {useDispatch, useSelector} from "react-redux";

function Body(props) {
    const dispatch=useDispatch();
    const ToggleAction=(e)=>{
        e.preventDefault();
        dispatch(addtodo(e.target.username.value))

    };
    return (
        <form onSubmit={ToggleAction} >
            <div>TO-DO-LIST</div>
            <input id="username" placeholder={"Add your To-Do"} />
            <button type="submit" > Click To Submit</button>
        </form>
    );
}

export default Body;
