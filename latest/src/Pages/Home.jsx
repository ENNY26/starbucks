import React from 'react'
import Hero from '../Components/Hero'
import FilterTab from '../Components/FilterTab'
import SearchRecipe from '../Components/SearchRecipe'

const Home = () => {
  return (
    <div>
    <Hero/>
    <FilterTab/>
    <SearchRecipe/>
    </div>
  )
}

export default Home