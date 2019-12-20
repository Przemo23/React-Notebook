import React, { Component } from 'react';
import Button from "react-bootstrap/Button";

import Link from "react-router-dom/Link";


class NoteItem extends Component {
   
   
    getStyle = () =>{
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom:'1px #ccc dotted',
        }
    };
    getStringDate = (date) =>{
        return date.getFullYear().toString() + '-' + date.getMonth().toString() + '-' +date.getDay().toString();
        
    };
    handleEdit = () =>{
        this.props.setEditedNote(this.props.note.id)
    };
    handleDelete = () =>{
        this.props.deleteNote(this.props.note.id)
    };
    
    render () {
     
        return (
            <tr style = {this.getStyle()}>
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