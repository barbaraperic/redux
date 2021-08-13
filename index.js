const addTodo = { 
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    completed: false
  }
}

const removeTodo = {
  type: 'REMOVE_TODO',
  id: 0
}

const toggleTodo = {
  type: 'TOGGLE_TODO',
  id: 0
}

const addGoal = {
  type: 'ADD_GOAL',
  goal: {
    id: 0,
    name: 'Run a marathon'
  }
}

const removeGoal = {
  type: 'REMOVE_GOAL',
  id: 0,
}

function todo(state=[], action) {
  if (action.type === 'ADD_TODO') {
    return state.concat([action.todo])
  } else if (action.type === 'REMOVE_TODO') {
    return state.filter((todo) => todo.id !== action.id)
  } else if (action.type === 'TOGGLE_TODO') {
    return state.filter(todo => todo.id !== action.id ? todo : {
      ...todo,
      completed: !todo.completed,
    })
  } else {
    return state
  }
}

function goals(state=[], action) {
  switch(action.type) {
    case 'ADD_GOAL':
      return state.concat([action.goal])
    case 'REMOVE_GOAL':
      return state.filter((todo) => todo.id !== action.id)
  }
}


function createStore(reducer) {
  // the store
  // 1. state
  // 2. get state
  // 3. listen to changes
  // 4. update state
  let state
  let listeners = []

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    }
  }

  const dispatch = (state, action) => {
    state = reducer(state, action)
    listeners = listeners.forEach((listener) => listener())
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}

const store = createStore(todo);

store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    completed: false
  }
})