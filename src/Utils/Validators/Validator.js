export const required = (value) => {
  if (value) return undefined
  return "field is required";
};

export const maxLengthCreator = (length) => (value) => {
  if (value.length > length) return `max length is ${length} symbols`;
  return undefined;
};

export const minLengthCreator = (length) => (value) => {
  if (value.length < length) return `min length is ${length} symbols`;
  return undefined;
};

export const isEmail = (value) => {
  if (!value.match(/^[^\s@]+@[^\s@]+$/)) {
    return `is not an email`;
  } return undefined;
};

export const isNum = (value) => {
  if (isNaN(value)) return `is no a number`;
  return undefined;
};