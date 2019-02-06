import React from 'react';
import { PromiseProvider } from 'mongoose';



const ProfileImage = (props) => {

 
    return(

        <div className="card-columns">
            <img src = {props.userpicture} />

        </div>
    )
};

export default ProfileImage;