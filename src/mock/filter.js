const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const generateFilters = (tasks) => {
  return [
    {
      name: `all`,
      count: tasks.length
    },
    {
      name: `overdue`,
      count: tasks.slice().filter((it) => it.dueDate < Date.now()).length
    },
    {
      name: `today`,
      count: tasks.slice().filter((it) => it.dueDate === Date.now()).length
    },
    {
      name: `favorites`,
      count: tasks.slice().filter((it) => it.isFavorite).length
    },
    {
      name: `repeating`,
      count: tasks.slice().filter((it) => Object.values(it.repeatingDays).some(Boolean)).length
    },
    {
      name: `archive`,
      count: tasks.slice().filter((it) => it.isArchive).length
    },
  ];
};

export {generateFilters};
