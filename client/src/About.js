import React from 'react';
import './Styles/style.css';
import './Styles/Remix.css';

export default function About() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EatSafely</title>
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
              <div class="grid-item-2">
                <h1 class="main-heading">About Us!</h1>
                <p class="info-text">
                  According to the Centers for Disease Control and Prevention
                  (CDC), there are an estimated 48 million cases of foodborne
                  illness in the United States each year. This results in
                  approximately 128,000 hospitalizations and 3,000 deaths. The
                  most common causes of foodborne illness are norovirus,
                  Salmonella, and Clostridium perfringens. The CDC also
                  estimates that the economic cost of foodborne illness in the
                  United States is around $15.6 billion per year. These figures
                  are based on data collected by the CDC and other federal
                  agencies, as well as research studies. A portion of this would
                  be from spoiled food.
                  <br />
                  <br />
                  We are a team of three programmers who discovered the solution
                  to this by desigining an application that detects healthy and
                  unhealthy fruits{' '}
                </p>
              </div>
              <div class="grid-item-2">
                <h1 class="main-heading">Creators:</h1>
                <p class="info-text">
                  Art3mis#0001 <br />
                  TheCoolDev#4118 <br />
                  Prolific Tutor#6226
                </p>
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
