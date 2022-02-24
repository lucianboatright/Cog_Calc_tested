import React from "react";
import { Context } from "./WheelContext";

function Input() {
    return (
        <Context.Consumer>
            {(context) => (
                <div>
                    <p>What's your favourite season?</p>
                    <select onChange={context.handleChange}>
                        <option value="">Choose Destination</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                    </select>
                </div>                             
            )}     
        </Context.Consumer>
        
    )
}

export default Input;