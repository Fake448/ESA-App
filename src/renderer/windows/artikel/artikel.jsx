import React, { Component } from 'react';

const { ipcRenderer } = window.require('electron');

class artikelWindow extends Component{

    constructor(props){
        super(props);
        ipcRenderer.on('receiveStudentInfo', (e, student) => {
            this.setState({student: student})
        });
    }

    componentDidMount(){
        ipcRenderer.send('artikelWindow:loaded');
    }

    render(){
        console.log(this.state)
        return(
            <h1>Artikel-Fenster</h1>
        );
    }
}

export default artikelWindow;