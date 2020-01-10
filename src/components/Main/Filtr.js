import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";



class Filtr extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            fromDate: this.props.fromDate,
            toDate: this.props.toDate,
            filterCategory: '',
        }
    }
    
    
 
    
    handleFromChange = (event) =>{
        this.setState({
            fromDate: event.target.value
        })
    };
    handleToChange = (event) =>{
        this.setState({
            toDate: event.target.value
        })
    };
    handleCategoryChange = (event) =>{
        this.setState({
            filterCategory: event.target.value
        })
    };
    handleSubmit = (event) =>{
        
        this.props.changeFilters(this.state.fromDate,this.state.toDate,this.state.filterCategory,true)
        event.preventDefault();
        
    };
    handleDeleteFilter = () =>{
        this.props.changeFilters(this.state.fromDate,this.state.toDate,'',false)
    }
    getParsedDate = (date)=>{
        const days = date.getDay().toString();
        const months = date.getMonth().toString();
        const years = date.getFullYear().toString();
        return (years + '-' + months + '-' + days)
    }
    render () {
        return (
            <form onSubmit={ this.handleSubmit.bind(this)}>
                <Table striped >
                    <thead>
                    <tr>
                        <th>
                            From:
                            <input type = "date" name = "from" required="required" value = {new Date(this.state.fromDate).toISOString().substr(0,10)} onChange={this.handleFromChange} />
                        </th>

                        <th>
                            To:
                            <input type = "date" name = "to" required="required" value = {new Date(this.state.toDate).toISOString().substr(0,10)} onChange={this.handleToChange}/>
                        </th>
                        <th>
                            Category:
                            <select name = "category" onChange={this.handleCategoryChange}>
                                <option value=''>{''}</option>
                                {this.props.categories.map((category)=>
                                        <option>
                                            {category}
                                        </option>)}
                            </select>
                        </th>
                        <th>
                            <Button variant = "primary" type = "submit">Filter</Button>
                            <Button variant = "primary" onClick = {this.handleDeleteFilter}>Clear</Button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>

                </Table>
            </form>
        );
    }
}
export default Filtr;