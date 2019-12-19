import React, { Component } from 'react';
import NoteItem from "./NoteItem";
import Table from "react-bootstrap/Table";


class Notes extends Component {
    
    render () {
        console.log(this.props);
        return(
            
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th >Date</th>
                    <th>Title</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.props.notes.map((note)=>
                            <NoteItem key ={note.id} note = {note}/>)
                    }
                </tbody>
            </Table>
        )
    }
}


export default Notes;