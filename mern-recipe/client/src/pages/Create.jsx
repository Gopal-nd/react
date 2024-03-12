import React, { useState } from 'react'
import axios from 'axios';
import { useGetUserId } from '../hooks/useGetUserid';
import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import { useCookies } from 'react-cookie';

const Create = () => {
  const [cookies,_] = useCookies(["access_token"])
    const navigate = useNavigate()
    const id = useGetUserId()
    const [formData, setFormData] = useState({
        name: '',
        ingrediants: [''],
        instruction: '',
        imageUrl: '',
        cookingTime: 0,
        userOwner:id
      });
    
      const handleChange = (e, index) => {
        const { name, value } = e.target;
        if (name === 'ingrediants') {
          const updatedIngredients = [...formData.ingrediants];
          updatedIngredients[index] = value;
          setFormData({
            ...formData,
            ingrediants: updatedIngredients
          });
        } else {
          setFormData({
            ...formData,
            [name]: value
          });
        }
      };
    
      const handleAddIngredient = () => {
        setFormData({
          ...formData,
          ingrediants: [...formData.ingrediants, '']
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
          const response = await axios.post('http://localhost:3001/recipes', formData,{headers:{authorization:cookies.access_token}});
          toast.success("Create Successfully")
          navigate("/")
          console.log('Recipe added:', response.data);
          // Optionally show a success notification
        } catch (error) {
          console.error('Error adding recipe:', error);
          // Optionally show an error notification
        }
      };
    
      return (
        <div className="container shadow-xl bg-white sm:w-[600px] sm:h-[850] mt-11 m-1 rounded-xl mx-auto p-4">
          <h1 className="text-3xl font-semibold text-black text-center  mb-4">Add Recipe</h1>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-black">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ingrediants" className="block text-gray-700">Ingredients</label>
              {formData.ingrediants.map((ingrediant, index) => (
                <input
                  key={index}
                  type="text"
                  name="ingrediants"
                  value={ingrediant}
                  onChange={(e) => handleChange(e, index)}
                  className="mt-1 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              ))}
              <button
                type="button"
                onClick={handleAddIngredient}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Add Ingredient
              </button>
            </div>
            <div className="mb-4">
              <label htmlFor="instruction" className="block text-gray-700">Instruction</label>
              <textarea
                id="instruction"
                name="instruction"
                value={formData.instruction}
                onChange={handleChange}
                className="mt-1 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="imageUrl" className="block text-gray-700">Image URL</label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="mt-1 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cookingTime" className="block text-gray-700">Cooking Time</label>
              <input
                type="number"
                id="cookingTime"
                name="cookingTime"
                value={formData.cookingTime}
                onChange={handleChange}
                className="mt-1 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Add Recipe
            </button>
          </form>
        </div>
      );
}

export default Create