import React, {useState, useRef, useEffect} from 'react';
import {Stack, Typography} from '@mui/material';
import {labels} from './information';

import './Styles/Remix.css';
import './Styles/style.css';

export default function Predict() {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const handleImage = (e) => {
    if (e.target.files[0]) {
      // Resize the image to 300x300
      setImage(e.target.files[0]);
      setPrediction(null);
    }
  };

  const onSubmit = () => {
    // Send the image to the backend
    console.log(imageData);
    const data = imageData.data;
    const length = imageData.height;
    const width = imageData.width;
    const imageArray = new Array(length);
    for (let i = 0; i < length; i++) {
      imageArray[i] = new Array(width);
      for (let j = 0; j < width; j++) {
        const red = data[(i * width + j) * 4];
        const green = data[(i * width + j) * 4 + 1];
        const blue = data[(i * width + j) * 4 + 2];
        imageArray[i][j] = [red, green, blue];
      }
    }
    setLoading(true);
    fetch('https://eatserver.hop.sh/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(imageArray),
    })
      .then(
        (response) => response.json(), // if the response is a JSON object
      )
      .then((data) => {
        setLoading(false);
        setPrediction(data);
      });
  };

  useEffect(() => {
    // Transform the image into a 2d array and store in state
    if (image) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 256;
          canvas.height = 256;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 256, 256);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          setImageData(imageData);
        };
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EatSafely</title>
        <link rel="icon" type="image/png" href="public/favicon.png" />
      </head>

      <header className="container header">
        <nav className="nav">
          <div className="logo">
            <img src="logo-green.png" alt="" className="logo" width="200px" />
          </div>

          <div className="nav_menu" id="nav_menu">
            <button className="close_btn" id="close_btn">
              <i className="ri-close-fill"></i>
            </button>

            <ul className="nav_menu_list">
              <li className="nav_menu_item">
                <a href="/" className="nav_menu_link">
                  Home
                </a>
              </li>
              <li className="nav_menu_item">
                <a href="about" className="nav_menu_link">
                  About Us
                </a>
              </li>
              <li className="nav_menu_item">
                <a href="predict" className="nav_menu_link">
                  App
                </a>
              </li>
            </ul>
          </div>

          <button className="toggle_btn" id="toggle_btn">
            <i className="ri-menu-line"></i>
          </button>
        </nav>
      </header>

      <section className="wrapper">
        <div className="container">
          <div className="app_wrapper">
            <Stack
              direction="column"
              alignContent="center"
              justifyContent="center"
              spacing={2}
            >
              <div className="btn_wrapper">
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleImage}
                  multiple={false}
                  ref={fileInputRef}
                  hidden
                />
                <button
                  className="btn upl_btn"
                  onClick={() => {
                    fileInputRef.current.click();
                  }}
                >
                  Upload <i className="ri-file-upload-line"></i>
                </button>
              </div>
              {image && <img src={URL.createObjectURL(image)} alt="" />}
              {image && (
                <div className="btn_wrapper">
                  <button className="btn upl_btn" onClick={onSubmit}>
                    Submit <i className="ri-file-upload-line"></i>
                  </button>
                </div>
              )}
              {loading && <p>Loading...</p>}
              {prediction && (
                <Typography>
                  Your image shows a: {labels[prediction[0]]}
                </Typography>
              )}
              {prediction && (
                <Typography>
                  Confidence: {(prediction[1] * 100).toFixed(2)}%
                </Typography>
              )}
            </Stack>
          </div>
        </div>
      </section>

      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
      <script src="./script.js" defer></script>
    </>
  );
}
