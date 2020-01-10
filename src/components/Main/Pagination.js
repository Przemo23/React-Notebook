import React, { Component } from 'react';


import Button from "react-bootstrap/Button";


class Pagination extends Component {

    render () {

        return(

            <div>
                <Button variant = "primary" name = "previousPage">PreviousPage</Button>
                <Button variant = "primary" name = "nextPage">Next Page</Button>
            </div>
        )
    }
}


export default Pagination;