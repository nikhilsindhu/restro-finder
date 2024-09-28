import axios from "axios";
import { randomRestroGenerator } from "./randomRestroGenerator";

const { REACT_APP_GOOGLE_API_KEY: GOOGLE_API_KEY } = process.env;

const fetchRestroByLocality = (locality, radius = 5000) => {
  if (!GOOGLE_API_KEY) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          payload: Array.from({ length: 10 }).map((_, index) =>
            randomRestroGenerator()
          ),
        });
      }, 2000);
    });
  }

  return new Promise((resolve) => {
    // Request to fetch data
    axios({
      method: "get",
      url: "https://maps.googleapis.com/maps/api/place/textsearch/json",
      params: {
        query: `restaurants+in+${locality.split(" ").join("+")}`,
        radius,
        type: "restaurant",
        keyword: "cruise",
        key: GOOGLE_API_KEY,
        fields:
          "vicinity,user_ratings_total,rating,photos,formatted_address,name,opening_hours,geometry",
      },
    })
      .then((response) => {
        const { results, status } = response.data;

        let restroList = [];

        if (status === "OK") {
          restroList = results.map((restro, i) => {
            const {
              id,
              formatted_address,
              user_ratings_total,
              rating,
              price_level,
              photos,
              opening_hours,
              name,
            } = restro;

            return {
              name: name,
              open: (opening_hours && opening_hours.open_now) || false,
              photo:
                (photos && photos[0] && photos[0].photo_reference) || false,
              price: price_level,
              rating: rating,
              totalRatings: user_ratings_total,
              vicinity: formatted_address,
              id: id,
            };
          });

          resolve({
            payload: restroList,
          });
        } else if (status === "ZERO_RESULTS") {
          resolve({
            error: "No results found for this area",
          });
        } else {
          resolve({
            error: "We ran into some issue! Please wait",
          });
        }
      })
      .catch((err) => {
        console.error({
          err,
        });
      });
  });
};

export default fetchRestroByLocality;
