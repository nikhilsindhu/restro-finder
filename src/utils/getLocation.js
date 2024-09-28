// Util function to fetch location

const getLocation = () => {
  return new Promise((resolve) => {
    if ("geolocation" in navigator) {
      // check if geolocation is supported/enabled on current browser
      try {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve({
            data: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          });
        });
      } catch (err) {
        // geolocation is not supported
        console.error("geolocation is not working properly in your browser");

        resolve({
          error: "geolocation is not working properly in your browser",
        });
      }
    } else {
      // geolocation is not supported
      console.log("geolocation is not enabled on this browser");

      resolve({
        error: "geolocation is not enabled on this browser",
      });
    }
  });
};

export default getLocation;
