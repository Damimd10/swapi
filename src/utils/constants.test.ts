import constants from './constants';

const { COLUMNS, DEFAULT_URL, MAX_ITEMS, START_PAGE } = constants;

describe('Constants', () => {
  it('should display the COLUMNS array', () => {
    expect(COLUMNS).toMatchInlineSnapshot(`
      Array [
        Object {
          "name": "Planet Name",
          "sort": true,
        },
        Object {
          "name": "Population",
          "sort": true,
        },
        Object {
          "name": "Diameter",
          "sort": true,
        },
        Object {
          "name": "Gravity",
        },
        Object {
          "name": "Climate",
        },
      ]
    `);
  });

  it('should display the DEFAULT_URL', () => {
    expect(DEFAULT_URL).toMatchInlineSnapshot(`"https://swapi.dev/api/planets"`);
  });

  it('should display the MAX_ITEMS', () => {
    expect(MAX_ITEMS).toMatchInlineSnapshot(`10`);
  });

  it('should display the START_PAGE', () => {
    expect(START_PAGE).toMatchInlineSnapshot(`1`);
  });
});
