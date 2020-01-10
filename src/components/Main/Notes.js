import React, { Component } from 'react';
import NoteItem from "./NoteItem";
import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";


class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {page:0}
    }
    next = ()=>{
        console.log(this.state.page,Math.floor(this.props.notes.length/10));
        if(this.state.page !== Math.floor((this.props.notes.length-1)/10)){
            this.setState({
                page:this.state.page+1,
            })
        }
    };
    prev = () =>{
        
        if(this.state.page !== 0){
            this.setState({
                page:this.state.page-1,
            })
        }
    };
    isOnPage = (note) =>{
        
        return Math.floor(this.props.notes.indexOf(note)/10) ===this.state.page
    }
    updatePage = () => {
        if (this.props.notes.length / 10 === this.state.page) {
            this.setState({
                page: this.state.page - 1,
            })
        }
    };
     
    render (){
        return(
            <div>
                
                <Table  bordered >
                    <thead >
                    <tr>
                        <th style={{width:'120px'}}>Date</th>
                        <th>Title</th>
                        <th style={{width:'170px'}}>
                            <Button variant="primary" name = "AddNew" onClick = {this.props.addNewNote}>New Note</Button> 
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.notes.filter(this.isOnPage).map((note)=>
                                <NoteItem key ={note.id} 
                                          note = {note}
                                          setEditedNote = {this.props.setEditedNote}
                                          deleteNote = {this.props.deleteNote}
                                />)
                        }
                    </tbody>
                </Table>
                <div style={{textAlign:'right'}}>
                    <Button variant="primary" name = "previousPage" onClick = {this.prev}>Previous Page</Button>
                    <Button variant="primary" name = "nextPage" onClick = {this.next}>Next Page</Button>
               </div>
            </div>
        )
    }
}


export default Notes;