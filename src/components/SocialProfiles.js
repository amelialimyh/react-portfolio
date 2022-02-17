import React, { Component, COMPONENT } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
    render() {
        const {link, image} = this.props.socialProfile;

        return (
            // Using span instead of divs will ensure that the icons are side by side instead of being stacked horizontally!!!
            <span>
                <a href={link}>
                    <img src={image} alt='social media' style={{ width: 25, height: 25, margin: 10 }} /></a>
            </span>
        )
    }
}

class SocialProfiles extends Component {
    render () {
        return (
            <div>
                <h2>Follow me on:</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;