const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const generateCountForFilters = (tasks, dateNow, filterName) => {
  let count;
  switch (filterName) {

    case `all`:
      count = tasks.length;
      break;

    case `overdue`:
      count = tasks.slice().filter((it) => it.dueDate < dateNow).length;
      break;

    case `today`:
      count = tasks.slice().filter((it) => it.dueDate
        && it.dueDate.getFullYear() === dateNow.getFullYear()
        && it.dueDate.getMonth() === dateNow.getMonth()
        && it.dueDate.getDate() === dateNow.getDate()).length;
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
  const dateNow = new Date();
  return filterNames.map((it) => {
    return {
      name: it,
      count: generateCountForFilters(tasks, dateNow, it),
    };
  });
};

export {generateFilters};
