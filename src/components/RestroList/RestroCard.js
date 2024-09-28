import React from "react";

// Import assets
import NoImageFound from "../../assets/images/NoImageFound.png";

// Import env var
const { REACT_APP_GOOGLE_API_KEY: GOOGLE_API_KEY } = process.env;

const RestroCard = (props) => {
  const { id, name, open, photo, price, rating, totalRatings, vicinity } =
    props;

  // Get price division icon
  const getPriceDiv = (price) => {
    let priceDiv = [];
    for (let i = 0; i < price; i++)
      priceDiv.push(
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="rupee-sign"
          className="svg-inline--fa fa-rupee-sign fa-w-10"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"
          />
        </svg>
      );

    return priceDiv;
  };

  // Get rating division icon
  const getRatingDiv = (rating) => {
    let half = 0;
    let full = parseInt(rating);
    let empty = 0;

    let remainder = rating % 1;

    if (remainder > 0.3 && remainder < 0.7) {
      half++;
    }

    if (remainder > 0.7) {
      full++;
    }

    empty = 5 - (half + full);

    let ratingDiv = [];

    for (let i = 0; i < full; i++) {
      ratingDiv.push(
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="star"
          className="svg-inline--fa fa-star fa-w-18"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          ></path>
        </svg>
      );
    }

    if (half) {
      ratingDiv.push(
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="star-half-alt"
          className="svg-inline--fa fa-star-half-alt fa-w-17"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 536 512"
        >
          <path
            fill="currentColor"
            d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
          />
        </svg>
      );
    }

    for (let i = 0; i < empty; i++) {
      ratingDiv.push(
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="star"
          className="svg-inline--fa fa-star fa-w-18"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
          />
        </svg>
      );
    }

    return ratingDiv;
  };

  const propertyImage = (photo) => {
    if (!GOOGLE_API_KEY) {
      return photo;
    }
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo}&sensor=false&key=${GOOGLE_API_KEY}`;
  };

  return (
    <li className="resto-card" key={id}>
      <div className="resto-card__info-box">
        <div className="resto-card__name">{name || "Name not known"}</div>
        <div className="resto-card__rating">
          {rating && getRatingDiv(rating)}

          <span className="resto-card__rating--fig">
            {totalRatings || "No"} Reviews
          </span>
        </div>
        <div className="resto-card__pricing">
          {price && getPriceDiv(price)}

          <span className={`resto-card__open-flag ${!open && "danger"}`}>
            {open ? "Open Now" : "Closed"}
          </span>
        </div>
        <div className="resto-card__address">
          {vicinity || "Location is not determined"}
        </div>
      </div>
      <div className="resto-card__image-box">
        <div className="img-box">
          <img
            src={photo ? propertyImage(photo) : NoImageFound}
            alt="Restro Image"
          />
        </div>
      </div>
    </li>
  );
};

export default RestroCard;
