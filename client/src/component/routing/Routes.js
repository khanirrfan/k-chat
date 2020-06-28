import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import Register from '../register/register';
import Login from '../login/login';
import Chat from '../message/message';
const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route path='/home' component={Home} />
        <Route path ='/chat/:id' component ={ Chat} />
      </Switch>
    </section>
  );
};

export default Routes;
