import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { decrement, increment } from './countSlice';

const Count = () => {
    const count = useSelector(data => data.count.value);
    const dispatch = useDispatch();
    // console.log(count);
    return (
        <div>Count {count}
            <button onClick={()=> dispatch(increment())}>increment</button>
            <button onClick={()=> dispatch(decrement())}>decrement</button>
        </div>
    )
}

export default Count;