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
        
    }
    
    render () {
        console.log(this.props);
        return (
            <tr style = {this.getStyle()}>
                <td>{this.props.note.date.toISOString().substring(0,10)}</td>
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