import axios from 'axios';

import { DEFAULT_URL } from '../utils/constants';

interface IPlanet {
  climate: string;
  diameter: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface IResponse {
  count: number;
  next?: string;
  previous?: string;
  results: IPlanet[];
}

const getPlanets = (url: string, query?: string) => {
  const isEmptyQuery = query === '';
  const currentUrl = query && !isEmptyQuery ? DEFAULT_URL : url;
  const source = axios.CancelToken.source();

  const params = {
    cancelToken: source.token,
    ...(!isEmptyQuery ? { params: { search: query } } : {}),
  };

  const promise: Promise<IResponse> = new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
    axios
      .get<IResponse>(currentUrl, params)
      .then(({ data }) => data)
      .catch((error) => Promise.reject(error.response)),
  );

  (promise as any).cancel = () => {
    source.cancel('Query was cancelled by React Query');
  };

  return promise;
};

export default getPlanets;
