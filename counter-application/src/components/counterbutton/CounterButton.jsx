
import './CounterButton.css'
import {PropTypes} from  'prop-types'

export default function CounterButton({val,incMethod,decMthod}) {
    
  
    return(
        <div className="counter">
           
            <div>
                <button className="counter-button" onClick={()=>incMethod(val)}>+{val}</button>
                <button className="counter-button" onClick={() => decMthod(val)}>-{val}</button>
           </div>
            
            
        </div>
    )
}

CounterButton.prototype = {
    val : PropTypes.number
}