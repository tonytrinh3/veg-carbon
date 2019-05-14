import React from 'react';
import {Link} from 'react-router-dom';
import './CameraPage.css';
import banana from '../../pictures/banana.jpg';
import cameraButton from '../../pictures/cameraButton.png';


const CameraPage = () =>{
    return (
        <div>
            <div className = 'cameraImage'>
                <img src={banana} alt='banana'/>

            </div>
            <div className = 'cameraButton'>
                <Link to="/ResultPage"><img src={cameraButton} alt='cameraButton' /></Link>
            </div>
        </div>
    )
}

export default CameraPage;