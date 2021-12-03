export const CACHE_NAME = "todos";

export const getAllTodos = () => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/task`, {
    headers: {
      Authorization: `${process.env.REACT_APP_BEARER}`,
    },
  }).then((res) => res.json());
};
