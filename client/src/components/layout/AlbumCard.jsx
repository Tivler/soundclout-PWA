import React from 'react';

const AlbumCard = ({ path, source, url, title, artist, price }) => {
    
    return (
        <>
            <a className={`album__wrapper--link`} rel="noopener noreferrer" href={`${url}`} target="_blank">
    
                <div className="album__wrapper--overlay">
                    <h3 className="album__wrapper__heading">{title} - {artist}</h3>
                    <p className="album__wrapper__description">Price <span>{price}</span></p>
                </div>

                <picture>
                    <source srcSet={`${source}`} type="image/jpeg" /> 
                    <img className="album__wrapper__image" src={`${path}`} alt="alt"/>
                </picture>
            </a>
        </>
    )
}

export default AlbumCard;