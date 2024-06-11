import { useState } from "react";
import { useDispatch } from "react-redux";
import { kaju } from './slice/slice';

const Input = () => {
    const [Name, setName] = useState(" ");

    const dispatch = useDispatch();

    function update() {
        setName(" ")
        dispatch(kaju(Name))
    }


    return (
        <>
            <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
            <button onClick={update}>Update</button>
        </>
    )
}

export default Input; 