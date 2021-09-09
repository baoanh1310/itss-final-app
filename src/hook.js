import { useState } from "react";

function useMyHook(arr)  {
    console.log(arr)
    const [item, setItem] = useState();
    const [index, setIndex] = useState();

    const handleChange = event => {
        setItem(event.target.value)
    }

    const findSelectedIndex = () => {
        let index = arr.indexOf(item)
        if (index !== -1)
            setIndex(index+1)
        else setIndex(NaN)
    }
    return [item, index, handleChange, findSelectedIndex];
}

export default useMyHook;
