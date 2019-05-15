import React from 'react';
import {Link} from 'react-router-dom';

const LibraryPage = () =>{
    return (
        <div>
            <Link to = '/ResultPage' className = "ui left floated button">Back to Previous Page <br/></Link>
            <Link to = '/' className="ui right floated button">Back to Camera</Link>
        </div>
    )
}

export default LibraryPage;