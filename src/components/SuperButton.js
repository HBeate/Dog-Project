import React, { Component } from 'react';
import styles from './SuperButton.module.css'
class SuperButton extends Component {
    state = {  }
   
   
    render() { 
        return (<div className={styles.heading}>
            <button>Button</button>
            </div> );
    }
}
 
export default SuperButton;