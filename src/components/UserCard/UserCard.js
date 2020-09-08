import React from 'react';

import './UserCard.scss';

const UserCard = ({id, pic, firstName, handleShowUserDetails, lastName, handleUserCheck, checked}) => {
    return <div onClick={()=>handleShowUserDetails(id)} className="user-card">
        <img alt="user-avatar" src={pic}></img>
        <p className="user-card__info">ID:{id}</p>
        <p className="user-card__info">First Name: {firstName} </p>
        <p className="user-card__info">Last name: {lastName}</p>
        {checked ? <p className="user-card__info--checked">Checked {checked}</p> : <button onClick={(e)=>handleUserCheck(e,id)} className="user-card__button">Check user</button>}
    </div>
};

export default UserCard;