import React, { useState } from 'react'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import Header from '../../component/Header/Header'
import './Home.css'

const Home = () => {

    const[category, setCategory] = useState('All');



  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home