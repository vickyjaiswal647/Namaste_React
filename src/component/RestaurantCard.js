import { IMG_CDN_URL } from "../constant";

const RestaurantCard = (props) => {
    return (
      <div className="card" >
        <img src={IMG_CDN_URL
          + props.cloudinaryImageId} />
        <h2>{props.name}</h2>
        <h3>{props.cuisines.join(",")}</h3>
        <h3>{props.areaName}</h3>
        <h4>{props.avgRating} stars</h4>
      </div>
    );
  };

  export default RestaurantCard;