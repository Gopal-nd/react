import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useGetUserId } from '../hooks/useGetUserid';
import {useNavigate} from 'react-router-dom'


const Saved = () => {
  const nav = useNavigate()
  
  const [savedRecipes, setSavedrecipes] = useState([])

const userID = useGetUserId()
  useEffect(() => {
    

    const fetchsavedRecipes = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/savedrecipes/${userID}`);
        setSavedrecipes(response.data.savedRecipes);
        // console.log(response.data);
  
      } catch (error) {
        console.error('Error fetching recipes:', error);
        // Optionally show an error notification
      }
    };
    fetchsavedRecipes()

  }, []);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Saved Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedRecipes?.map(recipe => (
          <div key={recipe._id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
           
            <p className="text-gray-700 mb-2">Ingredients: {recipe.ingredients ? recipe.ingredients.join(', ') : ''}</p>
            <p className="text-gray-700 mb-2">Instruction: {recipe.instruction}</p>
            <img src={recipe.imageUrl} alt={recipe.name} className="w-full h-40 object-cover mb-2" />
            <p className="text-gray-700">Cooking Time: {recipe.cookingTime} minutes</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Saved