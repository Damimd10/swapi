import sorting, { SortType } from './sorting';

const MOCK_PLANETS = [
  {
    name: 'Tatooine',
    rotation_period: '23',
    orbital_period: '304',
    diameter: '10465',
    climate: 'arid',
    gravity: '1 standard',
    terrain: 'desert',
    surface_water: '1',
    population: '200000',
    residents: ['http://swapi.dev/api/people/1/'],
    films: ['http://swapi.dev/api/films/1/'],
    created: '2014-12-09T13:50:49.641000Z',
    edited: '2014-12-20T20:58:18.411000Z',
    url: 'http://swapi.dev/api/planets/1/',
  },
  {
    name: 'Alderaan',
    rotation_period: '24',
    orbital_period: '364',
    diameter: '12500',
    climate: 'temperate',
    gravity: '1 standard',
    terrain: 'grasslands, mountains',
    surface_water: '40',
    population: '2000000000',
    residents: ['http://swapi.dev/api/people/5/'],
    films: ['http://swapi.dev/api/films/1/', 'http://swapi.dev/api/films/6/'],
    created: '2014-12-10T11:35:48.479000Z',
    edited: '2014-12-20T20:58:18.420000Z',
    url: 'http://swapi.dev/api/planets/2/',
  },
  {
    name: 'Yavin IV',
    rotation_period: '24',
    orbital_period: '4818',
    diameter: '10200',
    climate: 'temperate, tropical',
    gravity: '1 standard',
    terrain: 'jungle, rainforests',
    surface_water: '8',
    population: '1000',
    residents: [],
    films: ['http://swapi.dev/api/films/1/'],
    created: '2014-12-10T11:37:19.144000Z',
    edited: '2014-12-20T20:58:18.421000Z',
    url: 'http://swapi.dev/api/planets/3/',
  },
];

describe('sorting function', () => {
  it('should return in alphabetical order the planets', () => {
    const sort = { name: 'Planet Name', type: 'ASC' as SortType };
    const sortingResult = sorting(MOCK_PLANETS, sort) || [];
    const output = sortingResult.map(({ name }) => name);

    expect(output).toEqual(['Alderaan', 'Tatooine', 'Yavin IV']);
  });

  it('should return in descending alphabetical order the planets', () => {
    const sort = { name: 'Planet Name', type: 'DESC' as SortType };
    const sortingResult = sorting(MOCK_PLANETS, sort) || [];
    const output = sortingResult.map(({ name }) => name);

    expect(output).toEqual(['Yavin IV', 'Tatooine', 'Alderaan']);
  });

  it('should return the array order by ascending population', () => {
    const sort = { name: 'Population', type: 'ASC' as SortType };
    const sortingResult = sorting(MOCK_PLANETS, sort) || [];
    const output = sortingResult.map(({ population }) => population);

    expect(output).toEqual(['1000', '200000', '2000000000']);
  });

  it('should return the array order by descending population', () => {
    const sort = { name: 'Population', type: 'ASC' as SortType };
    const sortingResult = sorting(MOCK_PLANETS, sort) || [];
    const output = sortingResult.map(({ population }) => population);

    expect(output).toEqual(['1000', '200000', '2000000000']);
  });
});
