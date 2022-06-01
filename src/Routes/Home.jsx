import './Home.styles.css';
import Dropdown from '../Components/Dropdown';
import Checkbox from '../Components/Checkbox';
import { useState } from 'react';

const Home = () => {
    const [isChecked,setIsChecked] = useState({
        isSearchable : true,
        isMultiselect : false,
        isSelectall : false,
    })

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

    const clearbuttonHandler =(e) => {
        e.preventDefault();
    }
    const submithandler =(e) => {
        e.preventDefault();
    }

return(
    <div className='dropdown-container'>
        <form>
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
            />
            {false && (
            <>
            <button onClick={submithandler}>submit</button>
            <button onClick={clearbuttonHandler}>clear</button>
            </>
            )}
        </form>
    </div>
)
}

export default Home;