import React, {Component} from 'react'; 
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

class Routers extends Component {
    render(){        
        return ( 
                    <Route path="/" exact render={() => <h1> Home</h1>} /> 
                );
    }
}

export default Routers;
