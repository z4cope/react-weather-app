import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

export const fetchDetails = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${baseUrl}lat=${lat}&lon=${lon}&appid=422965f1bdf7e50a313aaa23c009d89a`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
