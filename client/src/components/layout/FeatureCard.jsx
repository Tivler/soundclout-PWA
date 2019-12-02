import React from 'react';

const FeatureCard = ({ path , source, url, title, artist, price }) => {
    return (
        <>
            <a className={`featured__wrapper--link`} rel="noopener noreferrer" href={`${url}`} target="_blank">
                <div className="featured__wrapper--overlay">
                    <h3 className="featured__wrapper__heading">{title} - {artist}</h3>
                    <p className="featured__wrapper__description">Price <span>{price}</span></p>
                </div>

                <picture>
                    <source srcSet={`${source}`} type="image/jpeg" /> 
                    <img className="featured__wrapper__image" src={`${path}`} alt="alt"/>
                </picture>
            </a>
        </>
    )
}

export default FeatureCard;