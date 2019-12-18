import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link";


class NoteItem extends Component {
    
    getUrl  = () =>{
        const noteId = '' + this.props.note.id;
        const url = 'Edit/${noteId}';
        return {
            pathname: {url}
        }
    };
   
    getStyle = () =>{
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom:'1px #ccc dotted',
        }
    };
    
    render () {
        return (
            <tr style = {this.getStyle()}>
                <td>{this.props.note.date}</td>
                <td>{this.props.note.title}</td>
                <td>
                    <Link to={{
                        
                        pathname: `Edit/${this.props.note.id.toString()}`,
                        state:{
                            fromNotifications: true
                        }
                    }}>Edit</Link>
                    <Button variant = "danger">Delete</Button>
                </td>
                    
               
            </tr>
        )
    };
    
    
}


export default NoteItem;