import React, { Component } from 'react';

class Person extends Component {
    state = {}
    render() {
        return (<div>
            Firstname: {this.props.firstname}
            Lastname: xxxxx
            <img alt ="irgendwas" src={this.props.image}/>

        </div>);
    }
}

export default Person;

