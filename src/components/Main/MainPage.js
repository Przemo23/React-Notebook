import React, { Component } from 'react';
import Filtr from './Filtr'
import Notes from "./Notes";
import EditPage from "../Edit/EditPage";




export class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {notes: [],categories:[],loading:true,fromFilter:new Date(),toFilter: new Date(),categoryFilter: '',isFilterOn: '',editedNote: 0,page:1};

        fetch('api/SampleData/AllNotes')
            .then(response => response.json())
            .then(data => {
                this.setState({ notes: data,
                                    loading: false,
                                    fromFilter: new Date(),
                                    toFilter: new Date(),
                                    categoryFilter: '',
                                    isFilterOn: false,
                });
            });
        fetch('api/SampleData/AllCategories')
            .then(response => response.json())
            .then(data2 => {
                this.setState({ categories:data2 });
            });
    }
    static displayName = MainPage.name;
    
    year = (date) =>{
        return parseInt(date.toISOString().substr(0,4),10)
    };
    month = (date) => {
        return parseInt(date.toISOString().substr(5,2),10)
    };
    day = (date) => {
        return parseInt(date.toISOString().substr(8,2),10)
    };
    isAboveLowerDate = (date) =>{
        const fromDate = new Date(this.state.fromFilter);
        if(this.year(date)> this.year(fromDate)){
            return true;
        }
        else if(this.year(date) ===this.year(fromDate)){
            if(this.month(date)> this.month(fromDate)){
                return true;
            }
            else if(this.month(date)=== this.month(fromDate)){
                
                if(this.day(date) >= this.day(fromDate))
                    return true;
            }
        }
        return false;
    };
    isBelowUpperDate = (date) =>{
        const toDate = new Date(this.state.toFilter);
        if(this.year(date)< this.year(toDate)){
            return true;
        }
        else if(this.year(date) === this.year(toDate)){
            if(this.month(date)< this.month(toDate)){
                return true;
            }
            else if(this.month(date)=== this.month(toDate)){
                
                if(this.day(date) <= this.day(toDate))
                    return true;
            }
        }
        return false;
    };
    filterNotes = (note) =>{
        return (
            this.state.categoryFilter === '' ? true : note.categories.some(cat => cat === this.state.categoryFilter)) 
                && this.isAboveLowerDate(new Date(note.date))
                && this.isBelowUpperDate(new Date(note.date))
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
    findInArray(note){
        console.log(note);
        return note.id === this.state.editedNote;
    }
    setEditedNote(id){
        this.setState(
        {
            editedNote: id,
        })
    }
    
    editNote = (id,title,date,isMarkdown,content,categories) => {
        //console.log(this.state.categories,categories);
        let edited = !this.state.notes.some(note => note.title === title && note.id !== id);
        let categoriesToAdd = [];
        for(let i = 0; i<categories.length;i++){
            if(!this.state.categories.some(category=>category===categories[i])) {
                console.log(this.state.categories,categories[i]);
                categoriesToAdd.push(categories[i])
            }
        }
        //console.log(categoriesToAdd);
        this.setState({
            editedNote: this.state.notes.some(note => note.title === title && note.id !== id) ? this.state.editedNote : 0,
            notes: this.state.notes.map((note) => note.id === id && edited ? Object.assign({}, note, {
                id,
                title,
                date,
                isMarkdown,
                content,
                categories
            }) : note),
            categories: this.state.categories.concat(categoriesToAdd),
        })
        
       
            

    };
    deleteNote = (id) => {
        console.log(id);
        this.setState({
            notes: this.state.notes.filter(note=>note.id !== id)
        });
       /*
        var data = new FormData(JSON.stringify(id));
        fetch("api/SampleData/DeleteNote", {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            
            body: data
        }).then(response => response.json());*/
    };
    addNewNote = () => {
        const newID = this.state.notes.length > 0 ? this.state.notes[this.state.notes.length-1].id + 1 : 1;
        this.setState({
            notes:this.state.notes.concat({
                id:newID,
                content:'',title:'NewNote',
                date: new Date(),
                isMarkdown:false,
                fileType:"txt",
                dateFormatted:'',
                categories:['']}),
            editedNote: newID,
        })
    };
  render () {
      console.log(this.state);
    return (
      
      <div>
          <h1 > Notebook </h1>
          {this.state.editedNote === 0 ?
              <div>
                  <Filtr
                      changeFilters = {this.changeFilters}
                      fromDate = {this.state.fromFilter}
                      toDate = {this.state.toFilter}
                      categoryFilter = {this.state.categoryFilter}
                      categories = {this.state.categories}
                  />
                      <Notes 
                          
                          notes = {this.passNotes()}
                          setEditedNote = {this.setEditedNote.bind(this)}
                          addNewNote = {this.addNewNote}
                          deleteNote = {this.deleteNote}
                      />
                      
              </div>:
                <EditPage     
                    note = {this.state.notes.find(this.findInArray.bind(this))}
                    setEditedNote = {this.setEditedNote.bind(this)}
                    editNote = {this.editNote}
                />
              
              
          }
          
      </div>
    );
  }
}
