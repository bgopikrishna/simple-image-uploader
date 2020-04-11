import axios from 'axios';
import { FILE_UPLOAD_ENDPOINT } from '../constants';

function validateImgResoultion(file, resolution, callback, debug = false) {
  const [width, height] = resolution.split('x');

  let img = new Image();

  const imgUrl = window.URL.createObjectURL(file);

  img.src = imgUrl;
  img.onload = () => {
    let isValid = false;

    if (debug) {
      console.log(file, `widht: ${img.width} height: ${img.height}`);
    }

    if (img.width === parseInt(width) && img.height === parseInt(height)) {
      isValid = true;
    }

    callback({ isValid, imgUrl });
  };
}

function postFileData(file) {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', 'o3g9g7xd');
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  return axios.post(FILE_UPLOAD_ENDPOINT, data, config).then((res) => res.data);
}

export { validateImgResoultion, postFileData };
