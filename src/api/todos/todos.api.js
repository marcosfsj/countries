export const CACHE_NAME = "todos";

export const getAllTodos = async () => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/task`, {
    headers: {
      Authorization: `${process.env.REACT_APP_BEARER}`,
    },
  }).then((res) => res.json());
};

export const getTodo = async (id) => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/task/${id}`, {
    headers: {
      Authorization: `${process.env.REACT_APP_BEARER}`,
    },
  }).then((res) => res.json());
};

export const createTodo = async (text) => {
  fetch(`${process.env.REACT_APP_API_SERVER}/task`, {
    method: "POST",
    headers: {
      Authorization: `${process.env.REACT_APP_BEARER}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({ text }),
  }).then((res) => res.json());
};

export const updateTodo = async (todo) => {
  fetch(`${process.env.REACT_APP_API_SERVER}/task`, {
    method: "PUT",
    headers: {
      Authorization: `${process.env.REACT_APP_BEARER}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then((res) => res.json());
};

export const deleteTodo = async (id) => {
  fetch(`${process.env.REACT_APP_API_SERVER}/task/${id}`, {
    method: "DELETE",
  }).then(() => id);
};
