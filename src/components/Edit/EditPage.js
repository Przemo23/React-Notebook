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
        console.log(this.props);
        return (
            <div style = {this.getStyle()}>
                <Link to = "/"> Back </Link>
                <p>
                    Title: {" "}
                    <input type = "text" name = "title"/>
                    {"     Date: "}
                    <input type = "date" name = "date"/>
                    {"     Markdown: "}
                    <input type = "checkbox" name = "markdown"/>
                </p>
                <textarea name = "text"/>
                <p>
                    <input type = "text" name = "category"/>
                    {"  "}
                    <select name = "categories">
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option selected value="coconut">Coconut</option>
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