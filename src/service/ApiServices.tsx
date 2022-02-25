import axios from "axios";

//Base Url Api
const baseUrl = "https://api.themoviedb.org/3";

//Get API (Ongoing Movie)
const getOngoingMovie = (page: any) => {
  return axios({
    method: "get",
    url:
      baseUrl +
      "/movie/now_playing?api_key=be7ddc7074fe58edbe5eb7645a53072d&language=en-US&page=" +
      { page },
  })
    .then((response) => {
      return {
        statusCode: response.status,
        dataMovie: response.data,
      };
    })
    .catch((error) => {
      console.log(error.response.data.status_code);
      return {
        statusCode: error.response.data.status_code,
        dataMovie: error.response.data,
      };
    });
};

export { getOngoingMovie };
