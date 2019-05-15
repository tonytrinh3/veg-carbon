import React from 'react';
import {Link} from 'react-router-dom';
import './CameraPage.css';
import banana from '../../pictures/banana.jpg';
import cameraButton from '../../pictures/cameraButton.png';


const CameraPage = () =>{
    return (
        <div>
            <div className = 'camera-image'>
                <img src={banana} alt='banana'/>

            </div>
            <div className = 'camera-button'>
                <Link to="/ResultPage"><img src={cameraButton} alt='cameraButton' /></Link>
            </div>
            <div className = 'library-button'>
                <Link to="/LibraryPage" className="ui right floated button">Your Library</Link>

            </div>
        </div>
    )
}

export default CameraPage;