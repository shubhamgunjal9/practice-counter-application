import { useState } from "react"
import './CounterButton.css'
import CounterButton from "./CounterButton"

export default function Counter() {
    
    const[value,setValue] = useState(0)

    function increamentCounter(val) {
        setValue(value + val)
    }

    function decrementCounter(val) {
        setValue(value - val)
    }

    function reset () {
        setValue(0)
    }

    return (
        <div className="counter">
            <span className="totalcount">{value}</span>
            <CounterButton val={1} incMethod = {increamentCounter} decMthod={decrementCounter} />
            <CounterButton val = {2} incMethod = {increamentCounter} decMthod={decrementCounter} />
            <CounterButton val = {5} incMethod = {increamentCounter} decMthod={decrementCounter} />
            <div >
                <button className="reset-button" onClick={reset}>reset</button>
            </div>
        </div>
    )
}