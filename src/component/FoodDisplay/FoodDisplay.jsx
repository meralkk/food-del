import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'

// This component displays the food items based on the selected category.
// The category prop is received from the Home page.
const FoodDisplay = ({category}) => {
    // Accessing the food_list from the StoreContext using the useContext hook
    const {food_list} = useContext(StoreContext)

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {/* Mapping through the food_list and rendering FoodItem component for each item */}
                {food_list.map((item,index)=>{
                    // If the category is "All" or matches the item's category, render the FoodItem component
                    if (category==="All" || category ===item.category){
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}  />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
