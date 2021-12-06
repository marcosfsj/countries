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
  return fetch(`${process.env.REACT_APP_API_SERVER}/task`, {
    method: "POST",
    headers: {
      Authorization: `${process.env.REACT_APP_BEARER}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({ description: text }),
  }).then((res) => res.json());
};

export const toggleTodoCompleted = async (todo) => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/task/${todo.id}`, {
    method: "PUT",
    headers: {
      Authorization: `${process.env.REACT_APP_BEARER}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({ completed: !todo.completed }),
  }).then((res) => res.json());
};

export const deleteTodo = async (id) => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/task/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `${process.env.REACT_APP_BEARER}`,
      "Content-type": "application/json",
    },
  }).then(() => id);
};
