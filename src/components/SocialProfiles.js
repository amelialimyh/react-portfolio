import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
    const {link, image} = props.socialProfile;

    return (
        // Using span instead of divs will ensure that the icons are side by side instead of being stacked horizontally!!!
        <span>
            <a href={link}>
                <img src={image} alt='social media' style={{ width: 25, height: 25, margin: 10 }} /></a>
        </span>
    )
}

const SocialProfiles = () => (
    <div>
        <h2>Follow me on:</h2>
        <div>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
                    <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                ))
            }
        </div>
    </div>
)

export default SocialProfiles;