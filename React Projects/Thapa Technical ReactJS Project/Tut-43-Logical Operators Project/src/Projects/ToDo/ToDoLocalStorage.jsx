// Retriving the data from the localStorage if exists
const todoKey = "reactTodo"

export const getLocalStorageTodoData=()=>{
  const rawTodos = localStorage.getItem(todoKey)

    // If localStorage hasn't any data
    if(!rawTodos) return []

    // Converting JSON string data into object if the localStorage has the data
    return JSON.parse(rawTodos)
}

export const setLocalStorageTodoData=(task)=>{
      // Add Data to LocalStorage
  // Note: The value should always be in string, so we need to convert array to string
  return localStorage.setItem(todoKey, JSON.stringify(task));
}