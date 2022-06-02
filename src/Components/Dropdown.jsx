import Select from 'react-select'
import { dropdownItems } from '../Data/DropdownData';


const Dropdown = (props) => {
    
    const handleValue = () => {
        if(!props.isMultiSelect)
        {
            return (props.selectedValue==='' ? null : props.selectedValue.label);
        } else {
            
            return (props.multiSelectValues);
        }
    }

    return (
        <Select
          classNamePrefix="select"
          value = {handleValue()}
          onChange={props.onChange}
          isSearchable={props.isSearchable}
          isMulti={props.isMultiSelect}
          options={dropdownItems} >
        </Select>
    )
}

export default Dropdown;