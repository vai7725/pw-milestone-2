export const getTodoFromLocalStorage = () => {
  let todos = localStorage.getItem('todos');
  if (todos) return (todos = JSON.parse(localStorage.getItem('todos')));
  return (todos = []);
};

export const saveTodoToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};
