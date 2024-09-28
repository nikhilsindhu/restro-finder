import { faker } from "@faker-js/faker";

export const randomRestroGenerator = () => {
  return {
    name: `${faker.food.ethnicCategory()} ${faker.food.adjective()} ${
      Math.random() > 0.5 ? "Restaurant" : "Cafe"
    }`,
    open: faker.datatype.boolean(),
    photo: faker.image.urlLoremFlickr({ category: "restaurant" }),
    price: faker.number.int({ min: 1, max: 5 }),
    rating: faker.number.int({ min: 1, max: 5 }),
    totalRatings: faker.number.int({ min: 1, max: 500 }),
    vicinity: `${faker.location.streetAddress()}, ${faker.location.city()}`,
    id: faker.string.uuid(),
  };
};
