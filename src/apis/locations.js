import axios from 'axios';

export const fetchLocations = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=422965f1bdf7e50a313aaa23c009d89a`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
