import React, { Component } from 'react';
import styles from './Dog.module.css';

class Dog extends Component {
    state = {}

  

    sayHello(){
        alert("hi")
    }

    render() {
        return (

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.tabs}>
                        <div onClick={this.sayHello}>Daten</div>
                        <div>Info</div>
                        <div>contact</div>

                    </div>
                    <div>
                        <h1>Ivy Belea</h1>
                        <h2>23.1.2017</h2>
                        <ul>
                            <li >Von Willebrand/ENM: {this.props.hasWillebrand} </li>
                            <li>Patella: {this.props.hasPatella}</li>
                            <li>Augen: {this.props.hasEyeFindings}</li>
                            <li>Gebiss: {this.props.hasScissors}</li>
                            <li>Grösse:   {this.props.height}</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.imageContainer}>

                </div>

            </div>);
    }
}

export default Dog;