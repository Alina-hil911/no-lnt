import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { connect } from 'react-redux';

import { getUsersStart } from './redux/Users/actions';
import { UserDetail, Home, NotFound } from './pages';
import { Loader, Footer, Header } from './components'
import './App.scss';
import { useMountEffect } from './customHooks/useMountEffect';

function App({ isLoading, getUsersStart }) {
  useMountEffect(() => getUsersStart() )

  return (


    <div className="App">
      {isLoading ? <Loader></Loader> :
        <Router>
          <>  <Header></Header>
            <Switch>
              <Route exact path="/user/:id" children={<UserDetail />} />
              <Route exact path="/" children={<Home />} />
              <Route children={<NotFound></NotFound>}></Route>
            </Switch>
            <Footer></Footer></>
        </Router>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  getUsersStart: () => dispatch(getUsersStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
