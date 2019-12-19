import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import {MainPage} from './components/Main/MainPage';
import {Counter} from "./components/Counter";

import './custom.css'

import Edit from "./components/Edit/Edit";
import {Layout} from "./components/Layout";

export default class App extends Component {
  

  render () {
      console.log(this.props);
    return (
        
        
            <Layout>
                <Route  path = '/Edit/:id' component={Edit} />
                <Route exact path = '/' component={MainPage}/>
                
                <Route path = '/Dupa' component={Counter} />
            </Layout>
        
        
    );
  }
}
