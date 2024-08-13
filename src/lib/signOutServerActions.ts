'use server'

export const handleSignOut = async () => {
  try {
    console.log('Sign Out')
  } catch (error) {
    console.error(error)
    throw error
  }
}
