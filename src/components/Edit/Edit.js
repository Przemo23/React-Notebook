import React, { Component } from 'react';
import EditPage from "./EditPage";

class Edit extends Component {
    
    
    state = {

        notes:[
            {
                title: 'Notatka1',
                category: 'Jeden',
                text: 'Jeden',
                date: new Date(2019,12,19),
                isMarkdown: true,
                id:1
            },
            {
                title: 'Notatka2',
                category: 'Trzy',
                text: 'Dwa',
                date: new Date(2020,5,12),
                isMarkdown: true,
                id:2
            },
            {
                title: 'Notatka3',
                category: 'Trzy',
                text: 'Trzy',
                date: new Date(2019,12,24),
                isMarkdown: true,
                id:3
            }
        ],

    };
    
    render () {
        return (
            <div>
                <EditPage note = {this.state.notes.find(this.findInArray.bind(this))}/>
            </div>
        )
    };

    findInArray(note){
        
        return note.id === parseInt(this.props.match.params.id,10);
    }
}


export default Edit;