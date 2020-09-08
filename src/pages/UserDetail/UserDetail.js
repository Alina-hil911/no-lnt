import React from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

import './UserDetail.scss'

const UserDetail = ({ currentUser }) => {
    let history = useHistory();
    const handleGoBack = () => {
        history.push('/')
    }
    console.log('CURRENT USER', currentUser)
    return <div className="app-container">
        <div className="user-detail">
            <img alt="user-avatar" className="user-detail__picture" src={ currentUser && currentUser.picture.thumbnail}></img>
            <p className="user-detail__info">Address: {currentUser && currentUser.location.city}, {currentUser && currentUser.location.street.name} {currentUser && currentUser.location.street.number} </p>
            <p className="user-detail__info">Email: {currentUser && currentUser.email}</p>
            <p className="user-detail__info">Gender: {currentUser && currentUser.gender}</p>
            <p className="user-detail__info">Date of birth</p>
            <p className="user-detail__info">phone number: {currentUser && currentUser.cell}</p>
        </div>
        <button onClick={handleGoBack} className="user-detail__button">Go back</button>
    </div>
};

const mapStateToProps = state => ({
    currentUser: state.currentUser
})
export default connect(mapStateToProps)(UserDetail)