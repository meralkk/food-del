import React, { useState } from 'react'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import Header from '../../component/Header/Header'
import './Home.css'

const Home = () => {

    const[category, setCategory] = useState('All');



  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home