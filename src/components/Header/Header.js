import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';


import './Header.scss';
import Clock from '../Clock/Clock';

const Header = ({checkedUsers}) => {
    const [showButton, setShowButton] = useState(false)
    let location = useLocation()
    useEffect(()=> {
        if(location.pathname.includes('user')) {
            setShowButton(true)
        }
        else setShowButton(false)
    }, [location])
    let history = useHistory();
    const handleGoBack = () => {
        history.push('/')
    };

    return (
        <header className="header">
            <Clock></Clock>
            <p>checkedUsers: {checkedUsers && checkedUsers.length}</p>
            { showButton && <button onClick={handleGoBack}>GO BACK</button>}
        </header>
    )
};
const mapStateToProps = state => ({
    checkedUsers: state.checkedUsers,

});

export default connect(mapStateToProps)(Header);