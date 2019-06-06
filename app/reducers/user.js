export default function window (state = null, action) {
  switch (action.type) {
    case 'USER_SET':
      return action.payload
    case 'USER_CLEAR':
      return null
    default:
      return state
  }
}
