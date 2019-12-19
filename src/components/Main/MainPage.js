import React, { Component } from 'react';
import Filtr from './Filtr'
import Notes from "./Notes";



export class MainPage extends Component {
  static displayName = MainPage.name;
    state = {

        notes:[
            {
                title: 'Notatka1',
                category: 'Jeden',
                text: 'Jeden',
                date: new Date(2019,2,19),
                isMarkdown: true,
                id: 1
            },
            {
                title: 'Notatka2',
                category: 'Trzy',
                text: 'Dwa',
                date: new Date(2020,5,12),
                isMarkdown: true,
                id: 2
            },
            {
                title: 'Notatka3',
                category: 'Trzy',
                text: 'Trzy',
                date: new Date(2019,3,24),
                isMarkdown: true,
                id: 3
            }
        ],
        fromFilter: new Date(2019,3,24),
        toFilter: new Date(2019,3,24),
        categoryFilter: "none",
        isFilterOn: false,

    };
    filterNotes = (note) =>{
        return note.date >= this.state.fromFilter && note.date <= this.state.toFilter && this.state.categoryFilter === note.category
    };
    passNotes = () =>{
        if(this.state.isFilterOn === false)
            return (this.state.notes);
        else
            return (this.state.notes.filter(this.filterNotes));
        
    };
    changeFilters = (fromFilter,toFilter,categoryFilter,isFilterOn) =>{
        this.setState(()=>
        {return {
            fromFilter: fromFilter,
            toFilter: toFilter,
            categoryFilter: categoryFilter,
            isFilterOn: isFilterOn
        }})
    };
  render () {
      console.log(this.props);
    return (
      
      <div>
          <h1 > Notebook </h1>
          <Filtr 
              changeFilters = {this.changeFilters}
              fromDate = {this.state.fromFilter}
              toDate = {this.state.toFilter}
              categoryFilter = {this.state.categoryFilter}
          />
          <Notes notes = {this.passNotes()} />
      </div>
    );
  }
}
