import React, { Component } from 'react';
import Button from "react-bootstrap/Button";




class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id: this.props.note.id,
            title: this.props.note.title,
            date: this.props.note.date,
            isMarkdown: this.props.note.isMarkdown,
            text: this.props.note.content,
            categories: this.props.note.categories,
            tempCategory: '',
            
            
        }
    }
    getStyle = () =>{
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom:'1px #ccc dotted',
        }
    }
    handleBack = () =>{
        this.props.setEditedNote(0)
    };
    handleTitleChange = (event) =>{
        this.setState({
            title: event.target.value
        })
    };
    handleDateChange = (event) =>{
        this.setState({
            date: event.target.value
        })
    };
    handleIsMarkdownChange = (event) =>{
        this.setState({
            isMarkdown: event.target.value
        })
    };
    handleTextChange = (event) =>{
        this.setState({
            text: event.target.value
        })
    };
    handleTempCategoryChange = (event) =>{
        this.setState({
            tempCategory: event.target.value
        })
    };
    handleAddCategory = () =>{
        
        if(this.state.categories.some(cat => cat !== this.state.tempCategory)){
            this.setState({
                categories:  this.state.categories.concat( this.state.tempCategory)
            })
        }
        
        
        
    };
    handleRemoveCategory = () =>{
        if(this.state.categories.some(cat => cat === this.state.tempCategory)){
            this.setState({
                categories:  this.state.categories.filter( i => i !== this.state.tempCategory )
            })
        }
    };
    handleSubmit = (event) =>{
        let categoriesToPass = [];
        if(this.state.categories.length > 1 && this.state.categories[0]===''){
            categoriesToPass =  this.state.categories.filter(cat => cat !== '')
        }
        else{
            categoriesToPass= this.state.categories
        }
            
        this.props.editNote(this.state.id,this.state.title,this.state.date,this.state.isMarkdown,this.state.text,categoriesToPass);
        event.preventDefault();
    };
    render () {
        console.log(this.state);
        return (
            <form onSubmit={this.handleSubmit} action="api/SampleData/EditNode" method="put">
            <div style = {this.getStyle()}>
                <Button variant = "primary" name = "Back" onClick = {this.handleBack}>Back</Button>
                <p>
                    Title: {" "}
                    <input type = "text" name = "title" value = {this.state.title} onChange = {this.handleTitleChange}/>
                    {"     Date: "}
                    <input type = "date" name = "date" value= {new Date(this.state.date).toISOString().substr(0,10)} onChange = {this.handleDateChange}/>
                    {"     Markdown: "}
                    <input type = "checkbox" name = "markdown" defaultChecked={this.state.isMarkdown} onChange={this.handleIsMarkdownChange}/>
                </p>
                <textarea name = "text" value={this.state.text} onChange = {this.handleTextChange}/>
                <p>
                    <input type = "text" name = "category" onChange={this.handleTempCategoryChange}/>
                    <select name = "categories">
                        {this.state.categories.map((category)=>
                        <option>
                            {category}
                        </option>)}
                    </select>
                    {"  "}
                    <Button variant = "primary" name = "AddCategory" onClick = {this.handleAddCategory}>AddCategory</Button>
                    <Button variant = "primary" name = "RemoveCategory" onClick = {this.handleRemoveCategory}>RemoveCategory</Button>
                    {"   "}
                    <Button variant = "primary" name = "submit" type = "submit">Submit</Button>


                </p>

            </div>
            </form>
        )
    }
}


export default EditPage;