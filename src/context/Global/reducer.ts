export const SET_SIDEBAR = 'SET_SIDEBAR'

export default function reducer(state: any, action: any) {
  switch (action.type) {
    case 'SET_SIDEBAR':
      return {
        ...state,
        sidebar: !state.sidebar,
      }
    default:
      return {
        ...state,
      }
  }
}
