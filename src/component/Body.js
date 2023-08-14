import { useState } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");


    function filterData(searchText, restaurants){
        const filteredData = restaurants.filter((restaurant)=>
            restaurant.info.name.includes(searchText)
        );

        return filteredData;
         
    }

    return (
      <>
        <div className="search-container">
            <input 
                className="search-input" 
                type="text" 
                placeholder="Search" 
                value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }} />
        </div>

        <button 
            className="search-btn" 
            onClick={()=>{
                const data = filterData(searchText, restaurants);
                setRestaurants(data);
            
            }} >Search</button>

        <div className="restaurant-list">
          {restaurants.map((item)=>{
              return <RestaurantCard {...item.info} key={...item.info.id} />
          })}    
      </div>
      </>  
      
      
    )
  }

  export default Body;