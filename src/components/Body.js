import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.brand_name?.includes(searchInput)
  );
  return filterData;
}

const Body = () => {
  //   const searchText = "KFC";

  //searchText is a local state variable

  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchInput, setSearchInput] = useState(""); // to create state variable

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="serch-input"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            // e.target.value = whatever you write in input
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter Data
            const data = filterData(searchInput, restaurants);
            // update the state - restaurant

            setRestaurants(data);
          }}
        >
          Search
        </button>
        {searchInput}
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant} key={restaurant.brand_id} />;
        })}
      </div>
    </>
  );
};

export default Body;
