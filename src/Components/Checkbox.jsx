import React from "react";
import './Checkbox.styles.css';

const Checkbox = (props) => {
    const {type,onChange,isChecked} = props;
    return (
        <div className="checkbox-container">
        <input 
        type="checkbox" 
        id={type} 
        onClick={onChange} 
        defaultChecked={isChecked}
        />
        <label htmlFor={type}>{type}</label>
        </div>
  )
}

export default Checkbox;