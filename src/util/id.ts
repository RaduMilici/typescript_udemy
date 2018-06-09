import id from '../interfaces/id';

const contains = (array: id[], { id }: id): boolean => {
  return findIndex(array, id) !== -1;
};

const findIndex = (array: id[], id: number): number => {
  return array.findIndex((element: id) => element.id === id);
};

export { contains, findIndex };
