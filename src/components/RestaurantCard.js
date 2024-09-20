const RestaurantCard = ({
  banner_image_es,
  brand_name,
  description,
  main_offering,
}) => {
  return (
    <div className="card">
      <img src={banner_image_es} />
      <h2>{brand_name}</h2>
      <h2>{description}</h2>
      <h2>{main_offering}</h2>
    </div>
  );
};

export default RestaurantCard;
