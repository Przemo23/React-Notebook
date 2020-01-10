import React, { Component } from 'react';
import Button from "react-bootstrap/Button";

import Link from "react-router-dom/Link";


class NoteItem extends Component {
   
   
   
    handleEdit = () =>{
        this.props.setEditedNote(this.props.note.id)
    };
    handleDelete = () =>{
        this.props.deleteNote(this.props.note.id)
    };
    
    render () {
     
        return (
            <tr>
                <td>{new Date(this.props.note.date).toISOString().substr(0,10)}</td>
                <td>{this.props.note.title}</td>
                <td>
                    <Button edit = "primary" onClick = {this.handleEdit}>Edit</Button>
                    <Button variant = "danger" onClick = {this.handleDelete}>Delete</Button>
                </td>
                    
               
            </tr>
        )
    };
    
    
}


export default NoteItem;