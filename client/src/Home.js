import React, {useEffect, useState} from 'react';

import './Styles/Remix.css';
import './Styles/style.css';

export default function Home() {
  useScript('https://unpkg.com/aos@2.3.1/dist/aos.js');
  useScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js');
  useScript('./script.js');

  return (
    <>
      <header className="container header">
        <nav className="nav">
          <div className="logo">
            <img src="/logo-green.png" alt="" className="logo" width="200px" />
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
          <div className="grid-cols-2">
            <div className="grid-item-1">
              <h1 className="main-heading">
                Eat Smart,
                <br />
                Live Well.
              </h1>
              <p className="info-text">
                With our app, you'll know what's healthy in no time!
              </p>

              <div className="btn_wrapper">
                <a href="/predict">
                  <button className="btn view_more_btn">
                    Try App <i className="ri-arrow-right-line"></i>
                  </button>
                </a>
              </div>
            </div>
            <div className="grid-item-2">
              <div className="team_img_wrapper">
                <img src="/fruits.png" alt="team-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Function to use external scripts
export function useScript(src) {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState(src ? 'loading' : 'idle');
  useEffect(
    () => {
      // Allow falsy src value if waiting on other data needed for
      // constructing the script URL passed to this hook.
      if (!src) {
        setStatus('idle');
        return;
      }
      // Fetch existing script element by src
      // It may have been added by another intance of this hook
      let script = document.querySelector(`script[src="${src}"]`);
      if (!script) {
        // Create script
        script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.setAttribute('data-status', 'loading');
        // Add script to document body
        document.body.appendChild(script);
        // Store status in attribute on script
        // This can be read by other instances of this hook
        const setAttributeFromEvent = (event) => {
          script.setAttribute(
            'data-status',
            event.type === 'load' ? 'ready' : 'error',
          );
        };
        script.addEventListener('load', setAttributeFromEvent);
        script.addEventListener('error', setAttributeFromEvent);
      } else {
        // Grab existing script status from attribute and set to state.
        setStatus(script.getAttribute('data-status'));
      }
      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = (event) => {
        setStatus(event.type === 'load' ? 'ready' : 'error');
      };
      // Add event listeners
      script.addEventListener('load', setStateFromEvent);
      script.addEventListener('error', setStateFromEvent);
      // Remove event listeners on cleanup
      return () => {
        if (script) {
          script.removeEventListener('load', setStateFromEvent);
          script.removeEventListener('error', setStateFromEvent);
        }
      };
    },
    [src], // Only re-run effect if script src changes
  );
  return status;
}
