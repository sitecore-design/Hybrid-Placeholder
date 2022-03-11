import React from 'react';

const HybridPlaceholderExample = ({ fields }) => {
    let {
        heading,
        date,
        text,
        isLoaded,
    } = fields;
    if (isLoaded === null || isLoaded === undefined) {
        isLoaded = true;
    }
    return (
        <div>
            <p>{heading}</p>
            {isLoaded && (
                <p>{date}</p>
            )}
            {!isLoaded && (
                <p>Loading...</p>
            )}
            <div dangerouslySetInnerHTML={{__html: text}} />
        </div>
    )};

export default HybridPlaceholderExample;
