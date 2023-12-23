import { useReducer, useState } from "react";
//init state
const initState = 0

// actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//reducer 
const reducer = (state, action) => {
    console.log("reducer...");
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error("invalid actions")
    }
}
const Content = () => {
    const [count, dispatch] = useReducer(reducer, initState)


    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >down</button>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >up</button>
        </div>
    )
}

export default Content;