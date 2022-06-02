import { useState } from 'react';
import Dropdown from './Dropdown';
import Checkbox from './Checkbox';
import './SelectForm.styles.css';

const SelectForm = (props) => {
    const [isChecked,setIsChecked] = useState({
        isSearchable : true,
        isMultiselect : false,
        isSelectall : false,
    });
    const [selectedValue,setSelectedValue] = useState({
        value:"",
        label: "",
    });

    const [multiSelectValues,setMultiSelectValues] = useState([]);
   
    const toggleSearchable = () => {
        setIsChecked({...isChecked,isSearchable:!isChecked.isSearchable});
       
    }
    const toggleMultiselect = () => {
        setIsChecked({...isChecked,isMultiselect:!isChecked.isMultiselect});
       
    }
    const toggleSelectall = () => {
        setIsChecked({isSelectall:!isChecked.isSelectall,
            isSearchable:!isChecked.isSelectall,
            isMultiselect:!isChecked.isSelectall});  
    }
    const handleSelectChange =(value) => {
        if(!isChecked.isMultiselect) {
        setSelectedValue({...selectedValue,value:value.value,label:value.label});
        } else {
            setMultiSelectValues(value);
        }
    }

    const clearbuttonHandler =() => {
        if(!isChecked.isMultiselect) {
        setSelectedValue({value:'',label:''});
        } else {
            setMultiSelectValues([]);
        }
    }
    const submithandler =(e) => {
        e.preventDefault();
        
    }

return(
    <div className='dropdown-container'>
        <form onSubmit={submithandler}>
            <div className="checkbox-container">
                <Checkbox 
                type='searchable' 
                isChecked={isChecked.isSearchable} 
                onChange={toggleSearchable}  
                />
                <Checkbox 
                type ='multiselect' 
                isChecked={isChecked.isMultiselect} 
                onChange={toggleMultiselect} 
                />
                <Checkbox 
                type='select all' 
                isChecked={isChecked.isSelectall} 
                onChange={toggleSelectall} 
                />
            </div>
            <Dropdown 
            isSearchable={isChecked.isSearchable} 
            isMultiSelect={isChecked.isMultiselect} 
            selectedValue={selectedValue.label}
            multiSelectValues = {multiSelectValues}
            dataType={props.dataType}
            onChange={handleSelectChange}
            />
            {(( !isChecked.isMultiselect && selectedValue.label !=='')
            || (isChecked.isMultiselect && multiSelectValues.length !==0)) && (
            <div className='button-container'>
            <button className='button' onClick={clearbuttonHandler}>clear</button>
            <button className='button' type='submit'>submit</button>
            </div>
            )}
        </form>
    </div>
)
}

export default SelectForm;