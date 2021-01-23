const parseData = (data: string) => (data === 'unknown' || data === 'N/A' ? 0 : Number(data));

export const sortByNameASC = (data: any) => data.sort((a: any, b: any) => a.name > b.name);

export const sortByNameDESC = (data: any) => data.sort((a: any, b: any) => a.name < b.name);

export const sortByPopulationASC = (data: any) =>
  data.sort((a: any, b: any) => parseData(a.population) > parseData(b.population));

export const sortByPopulationDESC = (data: any) =>
  data.sort((a: any, b: any) => parseData(a.population) < parseData(b.population));

export const sortByDiameterASC = (data: any) =>
  data.sort((a: any, b: any) => parseData(a.diameter) > parseData(b.diameter));

export const sortByDiameterDESC = (data: any) =>
  data.sort((a: any, b: any) => parseData(a.diameter) < parseData(b.diameter));
