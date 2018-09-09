import React, { Component } from 'react';

import Aux from '../Aux/Aux'; 
import  './Layout.css';   
import Header from '../../containers/Header/Header'; 
import Footer from '../../containers/Footer/Footer';   
import asyncComponent from '../../hoc/asyncComponent';  

class Layout extends Component { 

    render () {
        return (
            <Aux> 
                 <Header/> 
                    {this.props.children} 
                <Footer/>  
            </Aux>
        )
    }
}

export default Layout;