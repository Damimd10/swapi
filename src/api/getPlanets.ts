import axios from 'axios';

import { DEFAULT_URL } from './../utils/constants';
export interface IPlanet {
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

type PlanetAPI = (url?: string, currentData?: IPlanet[]) => Promise<IPlanet[]>;

const getPlanets: PlanetAPI = async (url = DEFAULT_URL, currentData = []) => {
  const data = await axios.get(url).then(({ data }) => data);

  if (data.next) {
    return getPlanets(data.next, [...currentData, ...data.results]);
  }

  return [...currentData, ...data.results];
};

export default getPlanets;
