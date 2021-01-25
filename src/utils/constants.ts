const COLUMNS = [
  {
    name: 'Planet Name',
    sort: true,
  },
  { name: 'Population', sort: true },
  { name: 'Diameter', sort: true },
  { name: 'Gravity' },
  { name: 'Climate' },
];

const DEFAULT_URL = 'https://swapi.dev/api/planets';

const MAX_ITEMS = 10;

const START_PAGE = 1;

export default {
  COLUMNS,
  DEFAULT_URL,
  MAX_ITEMS,
  START_PAGE,
};
