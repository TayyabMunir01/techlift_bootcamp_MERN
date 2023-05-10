import React from "react";
import { memo,useState,useRef } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Difference1(){
    let [diff,setDiff] = useState(0)
    const input1 = useRef()
    const input2 = useRef()

   
    function handleDiff(){
        // let val1 = parseInt(input1.current.value)
        // let val2 = parseInt(input2.current.value)
        let val1 = parseInt(input1.current.querySelector('input').value)
        let val2 = parseInt(input2.current.querySelector('input').value)
        setDiff(val1-val2)
    }

    console.log('- rerendered')
    return (
        <>
            <div>
            <TextField id="outlined-basic" label="Num 1" variant="outlined" ref={input1} size={"small"}/>
                {/* <input type="text" ref={input1}></input> */}
                        -
                {/* <input type="text" ref={input2}></input> */}
            <TextField id="outlined-basic" label="Num 2" variant="outlined" ref={input2} size={"small"}/>
                {/* <button onClick={handleDiff}>Calculate</button> */}
                <Button variant="outlined" onClick={handleDiff} sx={{ml:1}}>Calculate</Button>

                 Result: {diff}
            </div>
        </>
    )
}

export default memo(Difference1)