'use server'

import { auth } from '@/auth'

//new Date(1724126076 * 1000) find expirary date
export const checkIsAuthenticated = async () => {
  const session = await auth()
  if (session) {
    return true
  } else {
    return false
  }
}

// import { checkIsAuthenticated } from '@/lib/checkIsAuthenticated'
// const isAuthenticated = await checkIsAuthenticated()
