import axios from 'axios';
import { fetchLocations } from '../../apis/locations';

jest.mock('axios');

describe('Testing redux pure function', () => {
  test('Should test fetchLocations function', async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          country: 'AU',
          lat: -27.676714,
          lon: 152.0984108763645,
          name: 'Egypt',
          state: 'Queensland',
        },
      ],
    });
    const locations = await fetchLocations('Egypt');
    expect(locations).toEqual([
      {
        country: 'AU',
        lat: -27.676714,
        lon: 152.0984108763645,
        name: 'Egypt',
        state: 'Queensland',
      },
    ]);
  });
});
