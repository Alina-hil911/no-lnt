import React, {useState} from 'react';
import {connect} from 'react-redux';

import './FilterInput.scss';
import {findUserStart} from '../../redux/Users/actions'



const FilterInput = ({findUserStart}) => {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit =  (e) => {
        e.preventDefault();
        findUserStart(value)
    }
    return <div className="input-container">
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={value} placeholder="Find user"></input>
        <button className="filter-button" type="submit">Submit</button>
        </form>
    </div>
};

const mapDispatchToProps = dispatch => ({
    findUserStart : (val) => dispatch(findUserStart(val))
})

export default connect(null, mapDispatchToProps)(FilterInput)