import axios from 'axios';
import { fetchDetails } from '../../apis/details';

jest.mock('axios');

describe('Testing details pure function', () => {
  test('Should test details funciton', async () => {
    axios.get.mockResolvedValue({
      data: {
        base: 'stations',
        clouds: { all: 43 },
        cod: 200,
        coord: {
          lat: 30.8586,
          lon: 29.5764,
        },
        dt: 1673110998,
        id: 358333,
        main: {
          feels_like: 288.82,
          grnd_level: 1011,
          humidity: 71,
          pressure: 1020,
          sea_level: 1020,
          temp: 289.3,
          temp_max: 289.3,
          temp_min: 289.3,
        },

        name: 'Dawwār Abū al ‘Āşī',
        sys: { country: 'EG', sunrise: 1673067620, sunset: 1673104486 },

        timezone: 7200,
        visibility: 10000,
        weather: [
          {
            description: 'scattered clouds',
            icon: '03n',
            id: 802,
            main: 'Clouds',
          },
        ],

        wind: {
          deg: 294,
          gust: 3.92,
          speed: 3.35,
        },
      },
    });
    const details = await fetchDetails(30.8586, 29.5764);
    expect(details).toEqual({
      base: 'stations',
      clouds: { all: 43 },
      cod: 200,
      coord: {
        lat: 30.8586,
        lon: 29.5764,
      },
      dt: 1673110998,
      id: 358333,
      main: {
        feels_like: 288.82,
        grnd_level: 1011,
        humidity: 71,
        pressure: 1020,
        sea_level: 1020,
        temp: 289.3,
        temp_max: 289.3,
        temp_min: 289.3,
      },

      name: 'Dawwār Abū al ‘Āşī',
      sys: { country: 'EG', sunrise: 1673067620, sunset: 1673104486 },

      timezone: 7200,
      visibility: 10000,
      weather: [
        {
          description: 'scattered clouds',
          icon: '03n',
          id: 802,
          main: 'Clouds',
        },
      ],

      wind: {
        deg: 294,
        gust: 3.92,
        speed: 3.35,
      },
    });
    expect(axios.get).toBeCalledWith(
      'https://api.openweathermap.org/data/2.5/weather?lat=30.8586&lon=29.5764&appid=422965f1bdf7e50a313aaa23c009d89a'
    );
  });
});
