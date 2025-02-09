import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  areaName,
  avgRating,
}) => {
  return (
    <div className="card">
      <img
        src={
          IMG_CDN_URL +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h2>{areaName}</h2>
      <h2>{avgRating}</h2>
    </div>
  );
};

export default RestaurantCard;
