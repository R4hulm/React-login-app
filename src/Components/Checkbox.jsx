import { Fragment } from "react";

const Checkbox = (props) => {
    const {type,onChange,isChecked} = props;
    return (
        <>
        <input type="checkbox" id={type} onClick={onChange} defaultChecked={isChecked}/>
        <label htmlFor={type}>{type}</label>
        </>
  )
}

export default Checkbox;