import React from 'react';
import {Link} from 'react-router-dom';
import './ResultPage.css'

const ResultPage = () =>{
    return (
        <div>
            <div className = "results">
                <h3>results</h3>
                <h1>10-12g</h1>
                <h3>carbon</h3>
            </div>
            <div className = "origin">
                <p>Origin of fruit:
                    <br/>
                    80% chance - Mexico
                    <br/>
                    20% chance - Brazil
                </p>
            </div>
            <Link to="/" className = "ui left floated button">Back to Camera <br/></Link>
            <Link to="/LibraryPage" className="ui right floated button">Your Library</Link>
        </div>
    )
}

export default ResultPage;