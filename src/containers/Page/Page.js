import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Page.css';
import Posts from './Page/Page';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';
//
//const AsyncNewPost = asyncComponent(() => {
//    return import('./NewPost/NewPost');
//});

class Page extends Component {
    state = {
        auth: true
    }

    render () {
        return (
                <div>
                Hi this is my page
                </div> 
        );
    }
}

export default Page;