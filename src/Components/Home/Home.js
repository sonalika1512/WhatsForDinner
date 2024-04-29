import React, { useState } from 'react';
import './Home.css';
import AppComponent from '../searchRecipe/searchRecipe.js'; // Corrected import

import homeimg from './homeimg.jpg'; // Importing the image file

function App() {
  const [searchQuery, setSearchQuery] = useState(''); // State to manage the search query

  // Function to handle input change in the search bar
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <section id="start-search" className="hero is-medium is-white">
        <div className="hero-body">
          <div className="container">
            <h1 className="site-logo title is-1">
              What's For Dinner?
            </h1>
            <p className="subtitle">
              You will find great meals that the <strong>whole family</strong> will enjoy!
            </p>
          </div>
        </div>
      </section>
      <section id="site-header" className="hero is-large">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-mobile is-centered">
              <div className="column is-three-quarters-mobile is-half-desktop">
                <div className="field is-fullwidth has-addons">

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="image-section" className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <img src={homeimg} alt="Dinner" className="image" /> {/* Use imported image */}
          </div>
        </div>
      </section>

      <AppComponent />
      
    </>
  );
}

export default App;
