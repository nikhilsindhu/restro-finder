const restroListSelector = (filter, list) => {
  switch (filter) {
    case "Price": {
      return list.sort((a, b) => {
        let aPrice = typeof a.price == "number" ? a.price : 0;
        let bPrice = typeof b.price == "number" ? b.price : 0;

        if (aPrice < bPrice) return 1;
        else if (aPrice > bPrice) return -1;
        else return 0;
      });
    }

    case "Rating": {
      return list.sort((a, b) => {
        let aRating = typeof a.rating == "number" ? a.rating : 0;
        let bRating = typeof b.rating == "number" ? b.rating : 0;

        if (aRating < bRating) return 1;
        else if (aRating > bRating) return -1;
        else return 0;
      });
    }

    case "Review": {
      return list.sort((a, b) => {
        let aReview = typeof a.totalRatings == "number" ? a.totalRatings : 0;
        let bReview = typeof b.totalRatings == "number" ? b.totalRatings : 0;

        if (aReview < bReview) return 1;
        else if (aReview > bReview) return -1;
        else return 0;
      });
    }

    default: {
      return list;
    }
  }
};

export default restroListSelector;
