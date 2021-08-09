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