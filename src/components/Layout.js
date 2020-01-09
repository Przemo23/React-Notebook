import React, { Component } from 'react';
import { Container } from 'reactstrap';


export class Layout extends Component {
    static displayName = Layout.name;

    render () {
        return (
            <div style={{backgroundColor:'#cdb585'}}>
                <Container>
                    {this.props.children}
                </Container>
                <footer>
                    <p>&copy; Mateusz Marciniewicz - a NIE Macinkiewicz</p>
                </footer>
            </div>
            
        );
    }
}