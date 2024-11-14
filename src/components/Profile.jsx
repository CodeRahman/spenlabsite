import React from "react";
import SubProfile from './SubProfile.jsx'


const Profile = ({profiles}) => {

    

    return (
        <div className="Profile">
            
            {profiles.map((profile, index) => (
                <SubProfile
                    key={index}
                    image={profile.image}
                    projectname={profile.profilename}
                    classification={profile.classification}
                    more={profile.more}
                />
            ))}
        </div>
         
    )
}

export default Profile;