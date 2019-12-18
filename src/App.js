import React, { Component } from 'react';
import { BrowserRouter as Router,Route,useParams } from 'react-router-dom';
import {MainPage} from './components/Main/MainPage';


import './custom.css'

import Edit from "./components/Edit/Edit";
import EditPage from "./components/Edit/EditPage";

export default class App extends Component {
  static displayName = App.name;
state = {
    notes:[
        {
            title: 'Notatka1',
            category: 'Jeden',
            text: 'Jeden',
            date: '29.03.2020',
            isMarkdown: true,
            id: 1
        },
        {
            title: 'Notatka2',
            category: 'Trzy',
            text: 'Dwa',
            date: '25.03.2020',
            isMarkdown: true,
            id: 2
        },
        {
            title: 'Notatka3',
            category: 'Trzy',
            text: 'Trzy',
            date: '18.12.2019',
            isMarkdown: true,
            id: 3
        }
    ]
};
  render () {
      console.log(this.props);
    return (
        
        <Router>
            <div>
                <Route exact path='/' render = {props =>(
                    <React.Fragment>
                        <MainPage notes = {this.state.notes}/>
                    </React.Fragment>
                )} />
                <Route path = '/Edit/:id' render = {props =>(
                    <React.Fragment>
                        <Edit notes = {this.state.notes} />
                    </React.Fragment>
                )}/>
                <Route path = '/Dupa' component={Edit} />
            </div>
        </Router>
    );
  }
}
