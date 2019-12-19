import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link"



class EditPage extends Component {
    
    getStyle = () =>{
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom:'1px #ccc dotted',
        }
    }

    render () {
        console.log(this.props.note.date);
        return (
            <div style = {this.getStyle()}>
                <Link to = "/"> Back </Link>
                <p>
                    Title: {" "}
                    <input type = "text" name = "title" value = {this.props.note.title}/>
                    {"     Date: "}
                    <input type = "date" name = "date" defaultValue= {this.props.note.date.toISOString().substr(0,10)}/>
                    {"     Markdown: "}
                    <input type = "checkbox" name = "markdown" defaultChecked={this.props.note.isMarkdown}/>
                </p>
                <textarea name = "text" value={this.props.note.text}/>
                <p>
                    <input type = "text" name = "category"/>
                    {"  "}
                    <select name = "categories">
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option default value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    {"  "}
                    <Button variant = "primary" name = "AddCategory">AddCategory</Button>
                    <Button variant = "primary" name = "RemoveCategory">RemoveCategory</Button>



                </p>

            </div>
        )
    }
}


export default EditPage;