import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";


class Filtr extends Component {
 
    state = {
        fromDate: '',
        toDate: '',
        filterCategory: '',
            
    }
    
    getStyle = () =>{
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom:'1px #ccc dotted',
        }
    };
    
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
        event.preventDefault();
        this.props.changeFilters(this.state.fromDate,this.state.toDate,this.state.filterCategory,true)
        
    };
    render () {
        return (
            <form onSubmit={ this.handleSubmit.bind(this)}>
                <Table striped >
                    <thead>
                    <tr>
                        <th>
                            From:
                            <input type = "date" name = "from" onChange={this.handleFromChange} value = {this.props.fromDate.toISOString().substr(0,10)}/>
                        </th>

                        <th>
                            To:
                            <input type = "date" name = "to" onChange={this.handleToChange} value = {this.props.toDate.toISOString().substr(0,10)}/>
                        </th>
                        <th>
                            Category:
                            <select name = "category" onChange={this.handleCategoryChange}>
                                <option value="none">''</option>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option default value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                            <Button variant = "primary" type = "submit">Filter</Button>
                            <Button variant = "danger">Delete Filter</Button>
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