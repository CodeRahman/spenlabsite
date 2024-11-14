import  React from  'react';
import './SubProfile.css';


const SubProfile = (props) => {
    return (
        <div className="SubProfile">
            <div className="profile-image">
                <img src={props.image} alt={props.profilename} />
            </div>
            <div className="profile-details">
                <h2>{props.profilename}</h2>
                <p>{props.classification}</p>
                <p>{props.more}</p>
            </div>
        </div>
    )
}

export default SubProfile;