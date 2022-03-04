import axios from "axios";

//Base Url Api
const baseUrl = "https://api.themoviedb.org/3";

//Api Key
const API_KEY = "be7ddc7074fe58edbe5eb7645a53072d";

//Get API (Ongoing Movie)
const getOngoingMovie = (page: any) => {
  console.log("Page Data ke", page);
  return axios({
    method: "get",
    url:
      baseUrl +
      `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`,
  })
    .then((response) => {
      return {
        statusCode: response.status,
        dataMovie: response.data,
      };
    })
    .catch((error) => {
      return {
        statusCode: error.response.data.status_code,
        dataMovie: error.response.data,
      };
    });
};

export { getOngoingMovie };
