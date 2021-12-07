import http from '@/netClient/config'

// +name regPage dot37
export async function doRegister (login, password, email) {
  try {
    const response = await http.post('/auth/registration', {
      login,
      password,
      email
    })
    // res.status(200).json({ message: 'ok' });
    // response body/data/headers
    return response.data
  } catch (error) {
    console.error({ error })
    throw error
  }
}
