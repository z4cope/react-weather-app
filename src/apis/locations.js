import axios from 'axios';

const url =
  'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=422965f1bdf7e50a313aaa23c009d89a';

export const fetchLocations = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
