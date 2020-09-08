import React, { useState } from 'react';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './Tabs.scss';
import {checkUser, loadMoreUsersStart, setCurrentUser} from '../../redux/Users/actions';

import UserCard from '../UserCard/UserCard'
const  Tabs = ({users, checkUser, checkedUsers, loadMoreUsersStart, setCurrentUser}) => {
    // useMountEffect(()=>{getUsersStart()})
    let history = useHistory();
    const [showAllUsers, setShowAllUsers] = useState(true);
    console.log(users);
    const handleTabChange = (type) => {
        if(type === "all" && showAllUsers) {
            return;
        }
        else if(type === "checked" && !showAllUsers) {
            return;
        }

         setShowAllUsers(!showAllUsers)
    }

    const handleLoadMoreUsers = () => {
        loadMoreUsersStart();
    }

    const handleShowUserDetails = (id) => {
        if(!id) {
            alert('Sorry, user does not have an id!');
            return;
        }
        console.log(id)
        setCurrentUser(id);
        history.push(`/user/${id}`)
    }
  
    const handleUserCheck = (e, id) => {
        if(!id) {
            return;
        }
        e.stopPropagation();
        let date = String(new Date());
        //let date = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        checkUser({id, date})
    }


    return <div className="tab">
        <div className="tab__button-container">
            <button onClick={()=>handleTabChange('all')} className={`tab__button ${showAllUsers && 'tab__button--active'}`}>SHOW ALL USERS</button>
            <button onClick={()=>handleTabChange('checked')} className={`tab__button ${!showAllUsers && 'tab__button--active'}`}>SHOW CHECKED USERS</button>
        </div>
        <div className="tab-content">
           {
               showAllUsers ?
          ( users && users.map(item => <UserCard key={uuidv4()}  pic={item.picture.thumbnail} handleShowUserDetails={handleShowUserDetails} handleUserCheck={handleUserCheck} checked={item.checked} lastName={item.name.last} firstName={item.name.first} id={item.id.value}></UserCard>))
          :   ( checkedUsers && checkedUsers.map(item => <UserCard key={uuidv4()} pic={item.picture.thumbnail} handleUserCheck={handleUserCheck} checked={item.checked} lastName={item.name.last} firstName={item.name.first} id={item.id.value}></UserCard>))
           }
        </div>
        <button onClick={handleLoadMoreUsers} className="tab__button tab__button--load">LOAD 20 MORE USERS</button>
    </div>
};

const mapStateToProps = state => ({
    users: state.users,
    checkedUsers: state.checkedUsers
});

const mapDispatchToProps = dispatch => ({
    checkUser: (id) => dispatch(checkUser(id)),
    loadMoreUsersStart: () => dispatch(loadMoreUsersStart()),
    setCurrentUser: (id) => dispatch(setCurrentUser(id)),

})
export default connect(mapStateToProps, mapDispatchToProps)(Tabs)