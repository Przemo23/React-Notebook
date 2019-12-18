import React, { Component } from 'react';
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types'
import Table from "react-bootstrap/Table";


class Notes extends Component {
    render () {
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

//PropTypes
Notes.propTypes = {
    notes: PropTypes.array.isRequired
}
export default Notes;