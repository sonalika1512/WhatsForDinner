import React from 'react';
import './Home.css' ;
import AppComponent from  '../searchRecipe/searchRecipe.js';


function App() {
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
                  <div className="control">
                    <input id="find-recipe" className="input" type="text" placeholder="Find a recipe" />
                  </div>
                  <div id="search-recipe" className="control">
                    <a className="button is-primary">
                      Search
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <AppComponent/>
      </section>
    </>
  );
}

export default App;
