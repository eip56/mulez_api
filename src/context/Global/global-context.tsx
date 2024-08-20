'use client'
import React from 'react'
import reducer, { SET_SIDEBAR } from './reducer'

interface Props {
  children: React.ReactNode
}

interface IState {
  sidebar: boolean
  setSidebar: () => void
}

const GlobalContext = React.createContext<IState | null>(null)

export function GlobalContextProvider({ children }: Props) {
  const [state, dispatch]: any = React.useReducer(reducer, {
    sidebar: false
  }) as IState[]

  /**
   * Sidebar State.
   * @type Boolean - OPEN === true | CLOSED === false
   * @returns VOID.
   */
  const setSidebar = React.useCallback(() => {
    dispatch({ type: SET_SIDEBAR })
  }, [])

  const value: any = React.useMemo(
    () => ({
      sidebar: state.sidebar,
      setSidebar
    }),
    [state, setSidebar]
  )

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

export const useGlobalContext = () => {
  return React.useContext(GlobalContext) as IState
}

// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark')
// } else {
//   document.documentElement.classList.remove('dark')
// }

// // Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')
