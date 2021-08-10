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

  return {
    getState,
    subscribe
  }
}

// createStore => {}