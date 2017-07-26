let nextTodoId = 0
export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    id: nextTodoId++,
    name:item.name,
    value:item.value
  }
}


export const updateItem = id => {
  return {
    type: 'UPDATE_ITEM',
    id
  }
}
