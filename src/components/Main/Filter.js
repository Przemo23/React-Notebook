import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";


class Filter extends Component {
  getStyle = () =>{
          return {
              backgroundColor: '#f4f4f4',
              padding: '10px',
              borderBottom:'1px #ccc dotted',
          }
      }
  render () {
    return (
      <form>
        <Table striped >
            <thead>
                <tr>
                    <th>
                        From:
                        <input type = "date" name = "from"/>
                    </th>
                
                    <th>
                        To:
                        <input type = "date" name = "to"/>
                    </th>
                    <th>
                        Category:
                        <select name = "category">
                          <option value="grapefruit">Grapefruit</option>
                          <option value="lime">Lime</option>
                          <option selected value="coconut">Coconut</option>
                          <option value="mango">Mango</option>
                        </select>
                        <Button variant = "primary">Filter</Button>
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
export default Filter;