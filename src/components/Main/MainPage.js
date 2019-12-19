import React, { Component } from 'react';
import Filtr from './Filtr'
import Notes from "./Notes";
import moment from 'react-moment';



export class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {notes: [],loading:true,fromFilter:'',toFilter: '',categoryFilter: '',isFilterOn: ''};

        fetch('api/SampleData/AllNotes')
            .then(response => response.json())
            .then(data => {
                this.setState({ notes: data,
                                    loading: false,
                                    fromFilter: new Date(2019,3,24),
                                    toFilter: new Date(2019,3,24),
                                    categoryFilter: "none",
                                    isFilterOn: false, });
            });
    }
    static displayName = MainPage.name;
    
    
      
    
    filterNotes = (note) =>{
        console.log(note.date);
        return (
            ( this.state.categoryFilter === note.category || this.state.categoryFilter !==  ''))
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
      
    return (
      
      <div>
          <h1 > Notebook </h1>
          <Filtr 
              changeFilters = {this.changeFilters}
              fromDate = {this.state.fromFilter}
              toDate = {this.state.toFilter}
              categoryFilter = {this.state.categoryFilter}
          />
          <Notes notes = {this.state.notes} />
      </div>
    );
  }
}
