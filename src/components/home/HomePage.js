import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render() {
        return (
            <div className="jumbotron">
                <h1>React Redux</h1>
                <p>Just to learn the basics of react</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        )
    }
};

module.exports = HomePage;
