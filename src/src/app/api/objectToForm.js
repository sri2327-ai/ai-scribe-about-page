export const objToForm = (obj) => {
  const form = new FormData();

  for (const key in obj) {
    form.append(key, obj[key]);
  }

  return form;
};
