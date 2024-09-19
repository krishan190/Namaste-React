import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Title = () => (
  <img
    className="logo"
    alt="logo"
    src="https://img.freepik.com/premium-vector/restaurant-logo-design-vector-illustration-food-symbol-vector_1236506-726.jpg"
  />
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    brand_id: 20,
    client_source_id: 13,
    banner_image_es:
      "https://product-assets.faasos.io/eatsure_cms/production/ff45eb24-ff5d-49d5-8652-7f90aaee28f5.jpg",
    brand_name: "Faasos",
    brand_start_time: "00:00:00",
    brand_end_time: "23:59:00",
    description: "Indulgent wraps loaded with high protein fillings",
    logo: "https://rp-media.faasos.io/catalog/images/KBD9B6BGSL.jpeg",
    rectangle_logo: "https://rp-media.faasos.io/catalog/images/KBD9B6BGSL.jpeg",
    background_url: "https://rp-media.faasos.io/catalog/images/KBD9B6BGSL.jpeg",
    background_url_large:
      "https://rp-media.faasos.io/catalog/images/KBD9B6BGSL.jpeg",
    main_offering: "Wraps",
    slug: "faasos",
    is_exclusive: 0,
    sequence: 0,
    minimum_order_amount: 0,
    brand_delivery_fees: 0,
    max_delivery_time: 0,
    min_delivery_time: 0,
    inclusive_mrp: 1,
    is_opened: 0,
    discount_info: [],
    sure_points_multiplier_data: null,
  },
  {
    brand_id: 26,
    client_source_id: 13,
    banner_image_es:
      "https://product-assets.faasos.io/eatsure_cms/production/44df4975-8ff8-49dd-8e66-58d4d9a80a87.jpg",
    brand_name: "Behrouz Biryani",
    brand_start_time: "00:00:00",
    brand_end_time: "23:59:00",
    description: "Handcrafted, Royal Biryanis",
    logo: "https://rp-media.faasos.io/catalog/images/AZQZ2LKXCP.jpeg",
    rectangle_logo: "https://rp-media.faasos.io/catalog/images/AZQZ2LKXCP.jpeg",
    background_url: "https://rp-media.faasos.io/catalog/images/AZQZ2LKXCP.jpeg",
    background_url_large:
      "https://rp-media.faasos.io/catalog/images/AZQZ2LKXCP.jpeg",
    main_offering: "Royal Biryani",
    slug: "behrouz-biryani",
    is_exclusive: 0,
    sequence: 0,
    minimum_order_amount: 0,
    brand_delivery_fees: 0,
    max_delivery_time: 0,
    min_delivery_time: 0,
    inclusive_mrp: 1,
    is_opened: 0,
    discount_info: [],
    sure_points_multiplier_data: null,
  },
  {
    brand_id: 21,
    client_source_id: 13,
    banner_image_es:
      "https://product-assets.faasos.io/eatsure_cms/production/20d17709-a8b0-41fb-be5b-737d3e97be76.jpg",
    brand_name: "Ovenstory",
    brand_start_time: "00:00:00",
    brand_end_time: "23:59:00",
    description: "Pizza with standout toppings",
    logo: "https://rp-media.faasos.io/catalog/images/0TB1SAAY2Z.jpeg",
    rectangle_logo: "https://rp-media.faasos.io/catalog/images/0TB1SAAY2Z.jpeg",
    background_url: "https://rp-media.faasos.io/catalog/images/0TB1SAAY2Z.jpeg",
    background_url_large:
      "https://rp-media.faasos.io/catalog/images/0TB1SAAY2Z.jpeg",
    main_offering: "Pizzas",
    slug: "ovenstory",
    is_exclusive: 0,
    sequence: 0,
    minimum_order_amount: 0,
    brand_delivery_fees: 0,
    max_delivery_time: 0,
    min_delivery_time: 0,
    inclusive_mrp: 1,
    is_opened: 0,
    discount_info: [],
    sure_points_multiplier_data: null,
  },
  {
    brand_id: 23,
    client_source_id: 13,
    banner_image_es:
      "https://product-assets.faasos.io/eatsure_cms/production/dd79d385-5898-4956-8a07-718b8ddde9ff.jpg",
    brand_name: "Firangi Bake",
    brand_start_time: "00:00:00",
    brand_end_time: "23:59:00",
    description: "Safe & Legendary Bakes",
    logo: "https://rp-media.faasos.io/catalog/images/LEGFVYDHFK.jpeg",
    rectangle_logo: "https://rp-media.faasos.io/catalog/images/LEGFVYDHFK.jpeg",
    background_url: "https://rp-media.faasos.io/catalog/images/LEGFVYDHFK.jpeg",
    background_url_large:
      "https://rp-media.faasos.io/catalog/images/LEGFVYDHFK.jpeg",
    main_offering: "Pasta & Lasagnas",
    slug: "firangi-bake",
    is_exclusive: 0,
    sequence: 0,
    minimum_order_amount: 0,
    brand_delivery_fees: 0,
    max_delivery_time: 0,
    min_delivery_time: 0,
    inclusive_mrp: 1,
    is_opened: 0,
    discount_info: [],
    sure_points_multiplier_data: null,
  },
  {
    brand_id: 24,
    client_source_id: 13,
    banner_image_es:
      "https://product-assets.faasos.io/eatsure_cms/production/56e8a229-4d1f-4afc-9217-d44b44299d15.jpg",
    brand_name: "Sweet Truth",
    brand_start_time: "00:00:00",
    brand_end_time: "23:59:00",
    description: "The Purest Indulgence",
    logo: "https://rp-media.faasos.io/catalog/images/2QK8YNKIWE.jpeg",
    rectangle_logo: "https://rp-media.faasos.io/catalog/images/2QK8YNKIWE.jpeg",
    background_url: "https://rp-media.faasos.io/catalog/images/2QK8YNKIWE.jpeg",
    background_url_large:
      "https://rp-media.faasos.io/catalog/images/2QK8YNKIWE.jpeg",
    main_offering: "Desserts",
    slug: "sweet-truth",
    is_exclusive: 0,
    sequence: 0,
    minimum_order_amount: 0,
    brand_delivery_fees: 0,
    max_delivery_time: 0,
    min_delivery_time: 0,
    inclusive_mrp: 1,
    is_opened: 0,
    discount_info: [],
    sure_points_multiplier_data: null,
  },
  {
    brand_id: 30,
    client_source_id: 13,
    banner_image_es:
      "https://product-assets.faasos.io/eatsure_cms/production/a2963595-02b9-4472-80a5-e790d9308d93.jpg",
    brand_name: "The Good Bowl",
    brand_start_time: "00:00:00",
    brand_end_time: "23:59:00",
    description: "Delicious Bowl Meals - Hygienic & Safe",
    logo: "https://rp-media.faasos.io/catalog/images/7BLOJN54GE.jpeg",
    rectangle_logo: "https://rp-media.faasos.io/catalog/images/7BLOJN54GE.jpeg",
    background_url: "https://rp-media.faasos.io/catalog/images/7BLOJN54GE.jpeg",
    background_url_large:
      "https://rp-media.faasos.io/catalog/images/7BLOJN54GE.jpeg",
    main_offering: "Rice Bowl",
    slug: "the-good-bowl",
    is_exclusive: 0,
    sequence: 0,
    minimum_order_amount: 0,
    brand_delivery_fees: 0,
    max_delivery_time: 0,
    min_delivery_time: 0,
    inclusive_mrp: 1,
    is_opened: 0,
    discount_info: [],
    sure_points_multiplier_data: null,
  },
  {
    brand_id: 27,
    client_source_id: 13,
    banner_image_es:
      "https://product-assets.faasos.io/eatsure_cms/production/5dc6b181-0749-4617-87be-d4a227998324.jpg",
    brand_name: "Lunchbox - Meals & Thalis",
    brand_start_time: "00:00:00",
    brand_end_time: "23:59:00",
    description: "Homestyle, Wholesome, Delightful",
    logo: "https://rp-media.faasos.io/catalog/images/EA1BCMJCWN.jpeg",
    rectangle_logo: "https://rp-media.faasos.io/catalog/images/EA1BCMJCWN.jpeg",
    background_url: "https://rp-media.faasos.io/catalog/images/EA1BCMJCWN.jpeg",
    background_url_large:
      "https://rp-media.faasos.io/catalog/images/EA1BCMJCWN.jpeg",
    main_offering: "Homestyle Meals",
    slug: "lunchbox",
    is_exclusive: 0,
    sequence: 0,
    minimum_order_amount: 0,
    brand_delivery_fees: 0,
    max_delivery_time: 0,
    min_delivery_time: 0,
    inclusive_mrp: 1,
    is_opened: 0,
    discount_info: [],
    sure_points_multiplier_data: null,
  },
  {
    brand_id: 25,
    client_source_id: 13,
    banner_image_es:
      "https://product-assets.faasos.io/eatsure_cms/production/cbd4171c-dc9c-4ba4-96f8-ef4e4c3f959e.jpg",
    brand_name: "The Biryani Life",
    brand_start_time: "00:00:00",
    brand_end_time: "23:59:00",
    description: "Hyderabad & Lucknow Biryani experts",
    logo: "https://rp-media.faasos.io/catalog/images/2JUXUZOAFH.jpeg",
    rectangle_logo: "https://rp-media.faasos.io/catalog/images/2JUXUZOAFH.jpeg",
    background_url: "https://rp-media.faasos.io/catalog/images/2JUXUZOAFH.jpeg",
    background_url_large:
      "https://rp-media.faasos.io/catalog/images/2JUXUZOAFH.jpeg",
    main_offering: "Hyderabadi Biryani",
    slug: "the-biryani-life",
    is_exclusive: 0,
    sequence: 0,
    minimum_order_amount: 0,
    brand_delivery_fees: 0,
    max_delivery_time: 0,
    min_delivery_time: 0,
    inclusive_mrp: 1,
    is_opened: 0,
    discount_info: [],
    sure_points_multiplier_data: null,
  },
  {
    brand_id: 31,
    client_source_id: 13,
    banner_image_es:
      "https://product-assets.faasos.io/eatsure_cms/production/bf483b98-1d1c-4aa2-b0c2-43f5b2175bd7.jpg",
    brand_name: "Pure Veg Meals by LunchBox",
    brand_start_time: "00:00:00",
    brand_end_time: "23:59:00",
    description: "Satvik bhi, Delicious bhi",
    logo: "https://rp-media.faasos.io/catalog/images/MLGVL3OSP20I.jpeg",
    rectangle_logo:
      "https://rp-media.faasos.io/catalog/images/MLGVL3OSP20I.jpeg",
    background_url:
      "https://rp-media.faasos.io/catalog/images/MLGVL3OSP20I.jpeg",
    background_url_large:
      "https://rp-media.faasos.io/catalog/images/MLGVL3OSP20I.jpeg",
    main_offering: "Veg Meals",
    slug: "pure-veg-meals-by-lunchbox",
    is_exclusive: 0,
    sequence: 0,
    minimum_order_amount: 0,
    brand_delivery_fees: 0,
    max_delivery_time: 0,
    min_delivery_time: 0,
    inclusive_mrp: 1,
    is_opened: 0,
    discount_info: [],
    sure_points_multiplier_data: null,
  },
  {
    brand_id: 82,
    client_source_id: 13,
    banner_image_es:
      "https://product-assets.faasos.io/eatsure_cms/production/d3268cfb-a448-4638-9b84-32b822bd9322.jpg",
    brand_name: "Faasos' Signature Wraps & Rolls",
    brand_start_time: "00:00:00",
    brand_end_time: "23:59:00",
    description: "Extraordinarily Indulgent Wraps",
    logo: "https://rp-media.faasos.io/catalog/images/DT0V7MWZUK.jpeg",
    rectangle_logo: "https://rp-media.faasos.io/catalog/images/DT0V7MWZUK.jpeg",
    background_url: "https://rp-media.faasos.io/catalog/images/DT0V7MWZUK.jpeg",
    background_url_large:
      "https://rp-media.faasos.io/catalog/images/DT0V7MWZUK.jpeg",
    main_offering: "Loaded wrap",
    slug: "signature-wraps-rolls-by-faasos",
    is_exclusive: 0,
    sequence: 0,
    minimum_order_amount: 0,
    brand_delivery_fees: 0,
    max_delivery_time: 0,
    min_delivery_time: 0,
    inclusive_mrp: 1,
    is_opened: 0,
    discount_info: [],
    sure_points_multiplier_data: null,
  },
];

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

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant} key={restaurant.brand_id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
