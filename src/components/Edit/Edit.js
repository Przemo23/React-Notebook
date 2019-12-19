import React, { Component } from 'react';
import EditPage from "./EditPage";

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {notes: [],loading:true};

        fetch('api/SampleData/AllNotes')
            .then(response => response.json())
            .then(data => {
                this.setState({ notes: data,
                    loading: false
                     });
            });
    }
    
   
    render () {
        console.log(this.state);
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