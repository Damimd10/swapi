const filterByValue = <T>(array: T[], str: string) => {
  return array.filter((o) =>
    Object.keys(o).some((k) => {
      if (Array.isArray(o[k])) return null;
      return o[k].toLowerCase().includes(str.toLowerCase());
    }),
  );
};

export default filterByValue;
