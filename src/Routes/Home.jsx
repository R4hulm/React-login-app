import './Home.styles.css';
import Dropdown from '../Components/Dropdown';
import Checkbox from '../Components/Checkbox';
import { useState } from 'react';

const Home = () => {
    const [isChecked,SetIsChecked] = useState({
        isSearchable : true,
        isMultiselect : false,
    })

    const toggleSearchable = () => {
        SetIsChecked({...isChecked,isSearchable:!isChecked.isSearchable});
    }
    const toggleMultiselect = () => {
        SetIsChecked({...isChecked,isMultiselect:!isChecked.isMultiselect});
    }
return(
    <div className='dropdown-container'>
        <Checkbox type='searchable' isChecked={isChecked.isSearchable} onChange={toggleSearchable}/>
        <Checkbox type ='multiselect' isChecked={isChecked.isMultiselect} onChange={toggleMultiselect} />
        <Dropdown isSearchable={isChecked.isSearchable} isMultiSelect={isChecked.isMultiselect} />
    </div>
)
}

export default Home;