import React, { useState } from 'react'
import Hero from '../Components/Hero'
import FilterTab from '../Components/FilterTab'
import SearchRecipe from '../Components/SearchRecipe'
import Recipes from '../Components/Recipes'
import { recipeOptions,fetchData } from '../utils/fetchData'

const Home = () => {
  const[recipes, setRecipes] = useState([])
    const handleSearch = async (search) =>{
    if(search){

     const recipeData = await fetchData('https://starbucks-coffee-db2.p.rapidapi.com/api/recipes',
      recipeOptions
     )
     setRecipes(recipeData)
    }
  }

  return (
    <div>
    <Hero/>
    <FilterTab/>
    <SearchRecipe onSearch={(handleSearch)}/>
    <div>
     {recipes.length > 0 ? (
      recipes.map((recipe,index) => (
        <Recipes key={index} recipe={recipe}/>
      ))
    ):(
      <p>No recipes found</p>
     )}
    </div>
    </div>
  )
}

export default Home