import React, {Component} from 'react'; 
//import { Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'; 
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import  './assets/fonts/font-awesome/css/font-awesome.css';
import  './assets/css/style.css';
import  './assets/css/responsive.css';
import  './assets/css/bootstrap-imageupload.css';
import VenderRegistration from './containers/Vendor/Registration';

class Routers extends Component {
    render(){        
        return ( 
                <BrowserRouter>
                 <Layout>
                    <Switch>
                      <Route path="/" exact render={() => <h1> Home Page</h1>}  />  
                       <Route path="/vendor-registration" component={VenderRegistration} /> 
                      <Route path="*" exact render={() => <h1> Page Not found</h1>} /> 
                    </Switch>
                  </Layout>
                </BrowserRouter>
                    
                );
    }
}

export default Routers;
