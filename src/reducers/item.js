const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          value: action.value
        }
      ]
    case 'UPDATE_ITEM':
      return state.map(item =>
        (item.id === action.id) 
          ? {...item, 
            name: action.name}
          : item
      )
    default:
      return state
  }
}

export default items