import http from '@/netClient/config'

// +name regPage dot37
export async function doRegister (login, password, email) {
  try {
    const response = await http.post('/auth/registration', {
      login,
      password,
      email
    })
    return response.data
  } catch (error) {
    console.error({ error })
    throw error
  }
}

export async function doLogin (login, password) {
  try {
    const response = await http.post('/auth/login', {
      login,
      password
    })
    const { token } = response.data
    localStorage.accessToken = token
    return token // ??
  } catch (error) {
    console.error({ error })
    throw error
  }
}
