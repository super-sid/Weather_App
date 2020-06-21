import { API_KEY, BASE_URL } from "./Constants";
export const FetchWeather = async (lat = 50, lng = 50) => {
  try {
    const reqResponse = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    );
    const response = await reqResponse.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
