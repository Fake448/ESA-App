import React, { Component } from 'react';

const { ipcRenderer } = window.require('electron');

class Test extends Component{


    render(){
        console.log(this.state)
        return(
            <h1>Test</h1>
        );
    }
}

export default Test;