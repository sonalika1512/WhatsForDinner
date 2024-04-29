import React from 'react';

import './Navbar.css' ;// Import custom CSS for navbar styling
//import logo from './logo.jpg';


class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar">
        <div className="container">
          <a className="navbar-brand" href="#For_Dinner">
            <img src="https://t4.ftcdn.net/jpg/01/04/07/91/240_F_104079169_VyUFtXf9DaXDA4BraY4E6nifWJq7pljA.jpg" alt="Logo" className="navbar-logo" />Mealime</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link btn btn-outline-light" href="Recipes"> Recipes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-outline-light" href="#Meal_Planner">Meal Planner</a>
              </li>

              <li className="nav-item">
                <a className="nav-link btn btn-outline-light" href="#Login">Restaurants</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-outline-light" href="#About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-outline-light" href="#Contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-outline-light" href="#Login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;


