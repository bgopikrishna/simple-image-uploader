import React from 'react';
import { Image } from 'cloudinary-react';

const ImageItem = ({ imageId, details }) => {
    const { name, width, height } = details;

    return (
        <div className="viewer--item">
            <h3>
                {name} : {width} x {height}
            </h3>
            <Image
                publicId={imageId}
                width={width}
                height={height}
                crop="fill"
            />
        </div>
    );
};

export default ImageItem;
