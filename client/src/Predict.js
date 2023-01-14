import React from 'react';

import './Styles/Remix.css';
import './Styles/style.css';

export default function Predict() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EatSafely</title>
        <link rel="icon" type="image/png" href="public/favicon.png" />
      </head>
      <body>
        <header class="container header">
          <nav class="nav">
            <div class="logo">
              <img src="logo-green.png" alt="" class="logo" width="200px" />
            </div>

            <div class="nav_menu" id="nav_menu">
              <button class="close_btn" id="close_btn">
                <i class="ri-close-fill"></i>
              </button>

              <ul class="nav_menu_list">
                <li class="nav_menu_item">
                  <a href="/" class="nav_menu_link">
                    Home
                  </a>
                </li>
                <li class="nav_menu_item">
                  <a href="about" class="nav_menu_link">
                    About Us
                  </a>
                </li>
                <li class="nav_menu_item">
                  <a href="predict" class="nav_menu_link">
                    App
                  </a>
                </li>
              </ul>
            </div>

            <button class="toggle_btn" id="toggle_btn">
              <i class="ri-menu-line"></i>
            </button>
          </nav>
        </header>

        <section class="wrapper">
          <div class="container">
            <div class="grid-cols-2">
              <div class="btn_wrapper">
                <button class="btn upl_btn">
                  Upload <i class="ri-file-upload-line"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
        <script src="./script.js" defer></script>
      </body>
    </>
  );
}
