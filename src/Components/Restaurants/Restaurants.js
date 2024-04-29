import React, { useState, useEffect } from 'react';
import './Restaurants.css'; // Import CSS file for styling

// Component for displaying saved recipes
function DisplaySavedRecipe() {
  return (
    <section className="hero is-bold is-light">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Saved Recipes</h1>
          <div id="saved-recipe"></div> {/* Placeholder for saved recipes */}
        </div>
      </div>
    </section>
  );
}

// Component for searching restaurants in an area
function SearchRestaurants() {
  const handleSearchRestaurant = () => {
    const zomato_api_key = "f97a42723062b9a1fedcd6ecac3d1dbb";
    const location = "Kansas City, " + document.getElementById("find-restaurant").value.trim();
    const zomatoUrl = `https://developers.zomato.com/api/v2.1/locations?query=${location}`;

    fetch(zomatoUrl, {
      headers: {
        'user-key': zomato_api_key
      }
    })
    .then(response => response.json())
    .then(data => {
      const entity_id = data.location_suggestions[0].entity_id;
      const entity_type = data.location_suggestions[0].entity_type;
      const zomatoDetailsUrl = `https://developers.zomato.com/api/v2.1/location_details?entity_id=${entity_id}&entity_type=${entity_type}`;

      fetch(zomatoDetailsUrl, {
        headers: {
          'user-key': zomato_api_key
        }
      })
      .then(response => response.json())
      .then(data => {
        const restaurants = data.best_rated_restaurant;
        const restaurantArea = document.getElementById("restaurantArea");
        const table = document.createElement("table");
        const head = document.createElement("h2");
        head.textContent = `Top Restaurants in ${data.location.title}`;
        restaurantArea.innerHTML = '';
        restaurantArea.appendChild(head);
        restaurantArea.appendChild(table);

        const tr = table.insertRow();
        const th1 = document.createElement("th");
        const th2 = document.createElement("th");
        const th3 = document.createElement("th");
        const th4 = document.createElement("th");
        th1.textContent = "Name";
        th2.textContent = "Address";
        th3.textContent = "Rating";
        th4.textContent = "Cuisine";
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);

        restaurants.forEach(restaurant => {
          const tr = table.insertRow();
          const nameCell = tr.insertCell();
          const addressCell = tr.insertCell();
          const ratingCell = tr.insertCell();
          const cuisineCell = tr.insertCell();
          const googleMapsElements = encodeURIComponent(`${restaurant.restaurant.name}${restaurant.restaurant.location.address}`);
          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${googleMapsElements}`;
          nameCell.innerHTML = `<a href=${googleMapsUrl} class='recipe-link is-link' target='_blank'>${restaurant.restaurant.name}</a>`;
          addressCell.textContent = restaurant.restaurant.location.address;
          ratingCell.textContent = `${restaurant.restaurant.user_rating.aggregate_rating}/5`;
          cuisineCell.textContent = restaurant.restaurant.cuisines;
        });
      });
    });
    document.getElementById("find-restaurant").value = "";
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchRestaurant();
    }
  };

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="footer-logo">
               
                <img src="https://github.com/sonalika1512/whatsfordinner-2-/blob/main/WhatsForDinner-WeeklyMealPlanner-master/WhatsForDinner-WeeklyMealPlanner-master/assets/images/img-burgercooking.png?raw=true" alt="Burger Cooking" class="square-image" />

              </div>
            </div>
            <div className="column is-three-quarters">
              <h3 className="title">Not enough time to cook? Search restaurants in your area:</h3>
              <label htmlFor="find-restaurant"><i className="is-left-fa-map-marked-alt"></i> Enter city:</label>
              <div className="field has-addons">
                <div className="control">
                  <input id="find-restaurant" className="input" type="text" placeholder="Olathe, KS" onKeyPress={handleKeyPress} />
                </div>
                <div id="search-restaurant" className="control">
                  <button className="button-is-primary" onClick={handleSearchRestaurant}>Search</button>
                </div>
              </div>
              <div id="restaurantArea"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { DisplaySavedRecipe, SearchRestaurants }; // Export components for use in other files
