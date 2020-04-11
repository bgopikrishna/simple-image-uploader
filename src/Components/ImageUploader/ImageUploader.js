import React from 'react';
import { useState } from 'react';
import { validateImgResoultion, postFileData } from '../../utils/helpers';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './ImageUploader.scss';

/**
 * Component which is rendered in Image Upload Page, Handles image upload.
 */
const ImageUploader = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [file, setFile] = useState(null);
    const [error, SetError] = useState(false);
    const [uploadingState, setUploadingState] = useState(false);

    const formRef = useRef();
    const history = useHistory();

    const handleChange = (e) => {
        console.log(e.target.files);
        const file = e.target.files[0];
        if (file) {
            validateImgResoultion(file, '1024x1024', ({ isValid, imgUrl }) => {
                if (isValid) {
                    setUploadedImage(imgUrl);
                    setFile(file);
                    SetError(false);
                } else {
                    formRef.current.reset();
                    SetError(true);
                }
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUploadingState(true);
        postFileData(file)
            .then((res) => history.push(`/image/${res.public_id}`))
            .finally(() => setUploadingState(false));
    };

    const handleReset = (e) => {
        formRef.current.reset();
        setFile(null);
        setUploadedImage(null);
    };

    return (
        <form onSubmit={handleSubmit} ref={formRef} className="upload--form">
            <div className="flex-column upload--form--input-container">
                <label htmlFor="file">Choose a picture:</label>

                <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleChange}
                    accept="image/png, image/jpeg"
                    required
                    className="btn"
                />

                {file && (
                    <button
                        className="upload--form--reset"
                        type="reset"
                        onClick={handleReset}
                        title="Remove"
                    >
                        ✕
                    </button>
                )}

                {uploadedImage && (
                    <img
                        src={uploadedImage}
                        className="upload--form--preview"
                        alt="preview"
                    />
                )}

                {error && (
                    <p className="err-msg">
                        Please Select Images with 1024x1024 Resolution
                    </p>
                )}
            </div>

            <button type="submit" className="btn" disabled={uploadingState}>
                {uploadingState ? 'Uploading...' : 'Upload'}
            </button>
        </form>
    );
};

export default ImageUploader;
