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

function addTodo(state=[], action) {
  if (action.type === 'ADD_TODO') {
    return state.concat([action.todo])
  }

  return state
}


function createStore() {
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
    state = addTodo(state, action)
    listeners = listeners.forEach((listener) => listener())
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}

const store = createStore();

store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    completed: false
  }
})