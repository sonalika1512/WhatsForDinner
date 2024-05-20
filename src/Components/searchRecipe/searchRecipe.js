import React, { useState } from "react";
import Axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import searchIconImage from './search-icon.png';
import './searchRecipe.css';
import './addToPlanner.css';

const APP_ID = "a52b4d43";
const APP_KEY = "e0e5c667605f5e91d8275c973531b80a";

const RecipeContainer = "div";
const CoverImage = "img";
const RecipeName = "h2";
const SeeMoreText = "span";
const IngredientsText = "span";
const SeeNewTab = "span";

const RecipeComponent = (props) => {
  const [show, setShow] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const { label, image, ingredients, url, addToPlanner } = props.recipe;

  return (
    <RecipeContainer className="RecipeContainer">
      <Dialog
        onClose={() => setShow(false)}
        aria-labelledby="simple-dialog-title"
        open={!!show}
      >
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent>
          <RecipeName className="RecipeName">{label}</RecipeName>
          <table>
            <thead>
              <tr>
                <th>Ingredients</th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map((ingredient, index) => (
                <tr key={index} className="ingredient-list">
                  <td>{ingredient.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <SeeNewTab className="SeeNewTab" onClick={() => window.open(url)}>See Complete Recipe</SeeNewTab>
          <SeeMoreText className="SeeMoreText" onClick={() => setShow("")}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>

      <Dialog
        onClose={() => setShowCalendar(false)}
        aria-labelledby="calendar-dialog-title"
        open={showCalendar}
      >
        <DialogTitle>Select a Date</DialogTitle>
        <DialogContent>
          <Calendar onClickDay={(value) => { addToPlanner(label, value); setShowCalendar(false); }} />
        </DialogContent>
      </Dialog>

      <CoverImage className="CoverImage" src={image} alt={label} />
      <RecipeName className="RecipeName">{label}</RecipeName>
      <IngredientsText className="IngredientsText" onClick={() => setShow(!show)}>
        Ingredients
      </IngredientsText>
      <SeeMoreText className="SeeMoreText" onClick={() => setShowCalendar(true)}>
        Add To Planner
      </SeeMoreText>
    </RecipeContainer>
  );
};

const Container = "div";
const SearchBox = "div";
const SearchIcon = "img";
const SearchInput = "input";
const RecipeListContainer = "div";

const AppComponent = () => {
  const [searchQuery, updateSearchQuery] = useState("");
  const [recipeList, updateRecipeList] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const [planner, setPlanner] = useState({});

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    );
    updateRecipeList(response.data.hits);
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  const addToPlanner = (recipeName, date) => {
    const day = date.toDateString();
    setPlanner((prevPlanner) => {
      const newPlanner = { ...prevPlanner };
      if (!newPlanner[day]) newPlanner[day] = [];
      newPlanner[day].push(recipeName);
      return newPlanner;
    });
  };

  const removeFromPlanner = (recipeName, date) => {
    const day = date.toDateString();
    setPlanner((prevPlanner) => {
      const newPlanner = { ...prevPlanner };
      if (newPlanner[day]) {
        newPlanner[day] = newPlanner[day].filter(recipe => recipe !== recipeName);
        if (newPlanner[day].length === 0) {
          delete newPlanner[day];
        }
      }
      return newPlanner;
    });
  };

  return (
    <Container className="Container">
      <SearchBox className="SearchBox">
        <SearchIcon className="SearchIcon" src={searchIconImage} alt="Search" />
        <SearchInput className="SearchInput"
          placeholder="Find a Recipe"
          value={searchQuery}
          onChange={onTextChange}
        />
      </SearchBox>

      <RecipeListContainer className="RecipeListContainer">
        {recipeList?.length ? (
          recipeList.map((recipe, index) => (
            <RecipeComponent key={index} recipe={{...recipe.recipe, addToPlanner}} />
          ))
        ) : (
          <null />
        )}
      </RecipeListContainer>

      <div className="Planner">
        <h2>Recipe Planner</h2>
        {Object.keys(planner).map((day, index) => (
          <div key={index} className="PlannerDay">
            <h3>{day}</h3>
            <ul>
              {planner[day].map((recipe, idx) => (
                <li key={idx}>
                  {recipe}
                  <button onClick={() => removeFromPlanner(recipe, new Date(day))}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AppComponent;
