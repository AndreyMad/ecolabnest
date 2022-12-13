export const CUSTOM_STORAGE = {
  get: (resourceName) => JSON.parse(localStorage.getItem(resourceName)),
  set: (resourceName, selectedColumns) => localStorage
    .setItem(resourceName, JSON.stringify(selectedColumns)),
};
