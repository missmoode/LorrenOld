function attemptSet (user) {
}

function create (group) {
  return {
    type: 'GROUP',
    payload: {
      name: name
    }
  }
}

function clear () {
  return {
    type: 'USER_CLEAR'
  }
}

export default {attemptSet, create, clear}
