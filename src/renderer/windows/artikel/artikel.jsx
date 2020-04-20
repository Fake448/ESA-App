import React, { Component } from 'react';

const { ipcRenderer } = window.require('electron');

class artikelWindow extends Component{

    constructor(props){
        super(props);
        
        ipcRenderer.on('sendingArtikelinfo', (e, part) => {
            this.setState({part: part})
        });
    }

    componentDidMount(){
        ipcRenderer.send('artikelWindow:loaded');
    }

    render(){
        console.log("props: ", this.props, this.state)
        return(
            <h1>Artikel-Fenster</h1>
        );
    }
}

export default artikelWindow;