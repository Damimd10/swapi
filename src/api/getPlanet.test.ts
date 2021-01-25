import axios from 'axios';

import getPlanets from './getPlanets';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getPlanets API', () => {
  it('should fetch successfully data from API', async () => {
    const response = {
      data: {
        next: null,
        results: [{ name: 'Tatooine' }],
      },
    };

    mockedAxios.get.mockImplementation(() => Promise.resolve(response));

    await expect(getPlanets()).resolves.toEqual(response.data.results);
  });

  it('should fetch erroneously data from API', async () => {
    const errorMessage = 'Network Error';

    mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(getPlanets()).rejects.toThrow(errorMessage);
  });
});
