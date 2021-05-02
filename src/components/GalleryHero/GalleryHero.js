import React from 'react';

const GalleryHero = props => {
    return (
        <div className="hero-container">
            <img src={props.imagePath} alt={props.altText} />
        </div>
    );
}

export default GalleryHero;
