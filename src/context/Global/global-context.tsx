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
