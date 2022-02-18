import React from 'react';

const Artist = ({ artist }) => {
    // add a safeguard so that if the artist isn't valid, it would not run the rest of the code
    if (!artist) return null;

    const { images, name, followers, genres } = artist;


    return (
        <div>
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>{genres.join(',')}</p>
            {/* checks if images[0] is actually defined and if it is, it would pull it from the image url */}
            <img 
                src={image[0] && images[0].url} 
                alt='artist-profile'
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    // even if the image doesn't fit to the exact specifications, it makes sure that the image isn't skewed or mushed etc.
                    objectFit: 'cover'
                }} 
            />
        </div>
    )
}

export default Artist;