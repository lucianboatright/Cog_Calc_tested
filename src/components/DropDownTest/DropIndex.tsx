import React from 'react';
import ReactDOM from "react-dom";
import DropDown from './DropDown';
import { Provider } from "./WheelContext";

ReactDOM.render(
    <Provider>
        <DropDown />
    </Provider>, 
    document.getElementById("root"));

