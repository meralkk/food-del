import React, { useState } from 'react'
import AppDownload from '../../component/AppDownload/AppDownload'
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
        <AppDownload/>
    </div>
  )
}

export default Home