import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import './ImageViewer.scss';
import ImagesList from '../ImagesList/ImagesList';
import useCopy from '../../hooks/useCopy';

/**
 * Component which renders Cropped image results
 */
const ImageViewer = () => {
    const { id: imageId } = useParams();
    const inputRef = useRef();

    const { copied, copyToClipboard } = useCopy(inputRef);

    return (
        <div className="viewer">
            <button className="btn viewer--share" onClick={copyToClipboard}>
                <span role="img" aria-label="link">
                    &#128279;
                </span>
                <span> &nbsp; {copied ? 'Copied' : 'Copy Link'}</span>
            </button>

            <input
                type="text"
                className="hidden-input"
                defaultValue={window.location.href}
                aria-hidden="true"
                ref={inputRef}
            />

            <ImagesList imageId={imageId} />
        </div>
    );
};

export default ImageViewer;
