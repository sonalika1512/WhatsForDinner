import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer footer-dark">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="footer-logo">
              <h3 className="site-logo title is-1 has-text-black">
                What's For<br /> Dinner?
              </h3>
            </div>
          </div>

          <div className="column">
            <div className="footer-column">
              <div className="footer-header">
                <h3>Product Features</h3>
              </div>
              <ul className="link-list">
                <li><a href="#start-search">Search for recipes</a></li>
                <li><a href="#start-menu-ideas">Use starter meal ideas</a></li>
                <li><a href="#search-random-recipe">Random a classing menu</a></li>
                <li><a href="#search-restaurants-in-area">Find restaurants in your area</a></li>
                <li><a href="#saved-recipes-display">View Saved recipes</a></li>
                <li><a href="#weekly-planner-body">Edit weekly meal planner</a></li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="footer-column">
              <div className="footer-header">
                <h3>Technologies Used</h3>
              </div>
              <ul className="link-list">
                <li><a href="https://developer.edamam.com/edamam-recipe-api">Edamam Search API</a></li>
                <li><a href="https://developers.zomato.com/api">Zomato API</a></li>
                <li><a href="https://html2canvas.hertzen.com/">html2canvas JS</a></li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
