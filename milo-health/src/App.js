import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';

import {Home} from './Home';
import {About} from './About';
import {User} from './User';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout'



class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/user" component={User} />
                            <Route path="/about" component={About} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Router>
                </Layout>
            </React.Fragment>
        );
    }
}

export default App;
