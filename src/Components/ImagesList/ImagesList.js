import React from 'react';
import { CloudinaryContext } from 'cloudinary-react';
import { IMG_DIMENSIONS } from '../../constants';
import ImageItem from '../ImageItem/ImageItem';

const ImagesList = ({ imageId }) => {
    return (
        <CloudinaryContext cloudName="mistborn">
            {IMG_DIMENSIONS.map((detail) => (
                <ImageItem imageId={imageId} details={detail} />
            ))}
        </CloudinaryContext>
    );
};

export default ImagesList;
