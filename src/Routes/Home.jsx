import React from "react";
import SelectForm from "../Components/SelectForm";
import './Home.styles.css';

const Home = () => {
    return (
        <>
            <h1 className="heading">Home</h1>
            <div className="selectform-container">
                <SelectForm dataType="colors" />
                <SelectForm dataType="frameworks" />
            </div>
        </>
    )
}

export default Home;