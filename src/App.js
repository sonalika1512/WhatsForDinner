//import logo from './logo.png';
import './App.css';
import Navbar from  './Components/Navbar/Navbar.js' ;
import Home from  './Components/Home/Home.js' ;
import WeeklyMeal from  './Components/weeklyMeal/WeeklyMeal.js' ;
import Footer from  './Components/Footer/Footer.js' ;
import { DisplaySavedRecipe, SearchRestaurants } from './Components/Restaurants/Restaurants.js'; // Import the components correctly




function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <WeeklyMeal/>
    <DisplaySavedRecipe />
    <SearchRestaurants/>
    <Footer/>


    </>

  );
}

export default App;
