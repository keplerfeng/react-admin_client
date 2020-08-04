import React from 'react';
import { Map, Marker } from 'react-amap';

class Amap extends React.Component {


    render() {
        return (
        <div style={{ width: '600px', height: '400px'}} id="container">
            <Map/>
        </div>
        );
    }
}

export default Amap;