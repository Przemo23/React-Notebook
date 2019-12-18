import React, { Component } from 'react';
import Filter from './Filter'
import Notes from "./Notes";


export class MainPage extends Component {
  static displayName = MainPage.name;

  render () {
      
    return (
      
      <div>
          <h1 > Notebook </h1>
          <Filter />
          <Notes notes = {this.props.notes} />
      </div>
    );
  }
}
