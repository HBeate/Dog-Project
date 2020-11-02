import React, { Component } from 'react';
import Dog from './Dog';
import styles from './DogContainer.module.css'

class DogContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={styles.container}>
                
                <Dog name="Ivy-Balea vom Kooikerbeis, gew. 23.04.2017" hasWillebrand="free" hasPatella="frei" hasEyeFindings="o.B." hasScissors="komplette Schere" height="39 cm" image="https://cdn-cms.f-static.net/uploads/1850079/2000_5c688ac3a909a.jpg" />
                <Dog name="Ivy-Balea vom Kooikerbeis, gew. 23.04.2017" hasPatella="frei" image="https://cdn-cms.f-static.net/uploads/1850079/2000_5c688ac3a909a.jpg" />
                <Dog name="Ivy-Balea vom Kooikerbeis, gew. 23.04.2017" hasPatella="frei" image="https://cdn-cms.f-static.net/uploads/1850079/2000_5c688ac3a909a.jpg" />
                <Dog name="Ivy-Balea vom Kooikerbeis, gew. 23.04.2017" hasWillebrand="free" hasPatella="frei" hasEyeFindings="o.B." hasScissors="komplette Schere" height="39 cm" image="https://cdn-cms.f-static.net/uploads/1850079/2000_5c688ac3a909a.jpg" />
                <Dog name="Ivy-Balea vom Kooikerbeis, gew. 23.04.2017" hasPatella="frei" image="https://cdn-cms.f-static.net/uploads/1850079/2000_5c688ac3a909a.jpg" />
                <Dog name="Ivy-Balea vom Kooikerbeis, gew. 23.04.2017" hasPatella="frei" image="https://cdn-cms.f-static.net/uploads/1850079/2000_5c688ac3a909a.jpg" />

            </div>
        );
    }
}

export default DogContainer;