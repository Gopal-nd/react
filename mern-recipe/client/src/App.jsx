// RecipeList.js
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useGetUserId } from './hooks/useGetUserid.jsx';
import { useCookies } from 'react-cookie';
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';


function App() {
  const [cookies,_] = useCookies(["access_token"])
  const nav = useNavigate()
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedrecipes] = useState([])

const userID = useGetUserId()
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipes');
        setRecipes(response.data);
  
      } catch (error) {
        console.error('Error fetching recipes:', error);
        // Optionally show an error notification
      }
    };


    const fetchsavedRecipes = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/savedrecipes/id/${userID}`);
        setSavedrecipes(response.data);
        // console.log(response.data);
  
      } catch (error) {
        console.error('Error fetching recipes:', error);
        // Optionally show an error notification
      }
    };
    fetchsavedRecipes()
    fetchRecipes();
  }, []);

  const saveRecipe =async(recipeID)=>{
    try {
      const response = await axios.put('http://localhost:3001/recipes',{recipeID,userID},{headers:{authorization:cookies.access_token}});
  // console.log(response)
   toast.success("Saved Successfull")
      nav("/saved")
    } catch (error) {
      console.error('Error fetching recipes:', error);
      // Optionally show an error notification
    }
  }
  const isSaved = (recipeId) => {
    const r = savedRecipes;
    // Check if savedRecipes is an array before calling includes
    // if (Array.isArray(savedRecipes)) {
      if(r?.savedRecipes?.includes(recipeId)) return true
    //   if(r.includes(recipeId))
    //   return true
    // // }
    return false;
  };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes?.map(recipe => (
          <div key={recipe._id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-black">{recipe.name}</h2>
            <span onClick={()=>saveRecipe(recipe._id)}
            disabled={isSaved(recipe._id)}>{isSaved(recipe._id)?<button className='px-4 py-2 bg-green-500'>Saved</button>:<button className='px-4 py-2 bg-blue-500'>Save</button>}</span>
            <p className="text-gray-900 mb-2 text-lg">Ingredients: {recipe.ingrediants ? recipe.ingrediants.join(', ') : ''}</p>
            <p className="text-gray-700 mb-2 text-xl">Instruction: {recipe.instruction}</p>
            <img src={recipe.imageUrl} alt={recipe.name} className="w-full h-40 object-cover mb-2" />
            <p className="text-gray-700">Cooking Time: {recipe.cookingTime} minutes</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
