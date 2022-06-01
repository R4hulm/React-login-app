import Select from 'react-select'
import { dropdownItems } from '../Data/DropdownData';

const Dropdown = (props) => {
    return (
        <Select
          className="dropdown"
          classNamePrefix="select"
          isSearchable={props.isSearchable}
          isMultiSelect={props.isMultiSelect}
          options={dropdownItems} >
        </Select>
    )
}

export default Dropdown;