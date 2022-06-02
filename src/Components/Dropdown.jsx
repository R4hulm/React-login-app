import Select from 'react-select'
import { dropdownColors, dropdownItems } from '../Data/DropdownData';


const Dropdown = (props) => {
    let dropdownData = [];
    if(props.dataType ==="colors"){
        dropdownData = dropdownColors.map((item => {
            return {value: item,label: item};
        }));
        console.log(dropdownData);
    } else if(props.dataType === 'frameworks'){
        dropdownData=dropdownItems.map(item=> {
            return {value:item.id, label:item.title};
        });
    }
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
          options={dropdownData} 
          getOptionLabel={props.data}>
              
        </Select>
    )
}

export default Dropdown;