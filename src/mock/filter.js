const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const generateCountForFilters = (tasks, filterName) => {
  let count;
  switch (filterName) {

    case `all`:
      count = tasks.length;
      break;

    case `overdue`:
      count = tasks.slice().filter((it) => it.dueDate < Date.now()).length;
      break;

    case `today`:
      count = tasks.slice().filter((it) => it.dueDate === Date.now()).length;
      break;

    case `favorites`:
      count = tasks.slice().filter((it) => it.isFavorite).length;
      break;

    case `repeating`:
      count = tasks.slice().filter((it) => Object.values(it.repeatingDays).some(Boolean)).length;
      break;

    case `archive`:
      count = tasks.slice().filter((it) => it.isArchive).length;
      break;
  }
  return count;
};

const generateFilters = (tasks) => {
  return filterNames.map((it) => {
    return {
      name: it,
      count: generateCountForFilters(tasks, it),
    };
  });
};

export {generateFilters};
