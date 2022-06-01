import Select from 'react-select'
import { dropdownItems } from '../Data/DropdownData';


const Dropdown = (props) => {
    return (
        <Select
          classNamePrefix="select"
          isSearchable={props.isSearchable}
          isMulti={props.isMultiSelect}
          options={dropdownItems} >
        </Select>
    )
}

export default Dropdown;