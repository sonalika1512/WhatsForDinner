import React, { useState } from "react";
import Axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import searchIconImage from './search-icon.png';
import './searchRecipe.css' ;

const APP_ID = "a52b4d43";
const APP_KEY = "e0e5c667605f5e91d8275c973531b80a";

const RecipeContainer="div";
const CoverImage="img";
const RecipeName="h2";
const SeeMoreText="span";
const IngredientsText="span";
const SeeNewTab="span";

const RecipeComponent = (props) => {
    const [show, setShow] = useState("");
  
    const { label, image, ingredients, url } = props.recipe;
    return (
      <RecipeContainer className="RecipeContainer">
        <Dialog
          onClose={() => console.log("adsadad")}
          aria-labelledby="simple-dialog-title"
          open={!!show}
        >
          <DialogTitle>Ingredients</DialogTitle>
          <DialogContent>
            <RecipeName className="RecipeName">{label}</RecipeName>
            <table>
              <thead>
                <th>Ingredients</th>
              </thead>
              <tbody>
                {ingredients.map((ingredient, index) => (
                  <tr key={index} className="ingredient-list">
                    <td>{ingredient.text}</td>
                    {/* <td>{ingredient.nutritionalValue}</td> */}
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
        <CoverImage className="CoverImage" src={image} alt={label} />
        <RecipeName className="RecipeName" >{label}</RecipeName>
        <IngredientsText className="IngredientsText" onClick={() => setShow(!show)}>
          Ingredients
        </IngredientsText>
        <SeeMoreText className="SeeMoreText">
          Add To Planner
        </SeeMoreText>
      </RecipeContainer>
    );
  };

const Container = "div";
const SearchBox = "div";
const SearchIcon = "img";
// const Placeholder = "img";
const SearchInput = "input";
const RecipeListContainer = "div";

  const AppComponent = () => {
    const [searchQuery, updateSearchQuery] = useState("");
    const [recipeList, updateRecipeList] = useState([]);
    const [timeoutId, updateTimeoutId] = useState();
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
  
    return (
      <Container className="Container">  
  
        <SearchBox className="SearchBox">
            <SearchIcon className="SearchIcon"  src={searchIconImage} alt="Search"/>
            <SearchInput className="SearchInput"
              placeholder="Find a Recipe"
              value={searchQuery}
              onChange={onTextChange}
            />
          </SearchBox>
  
  
        <RecipeListContainer className="RecipeListContainer">
          {recipeList?.length ? (
            recipeList.map((recipe, index) => (
              <RecipeComponent key={index} recipe={recipe.recipe} />
            ))
          ) : (
            <null />
          )}
        </RecipeListContainer>
      </Container>
    );
  };
  
  export default AppComponent;