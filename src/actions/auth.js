import Swal from "sweetalert2"
import { fetchWithoutToken } from "../helpers/fetch"
import { types } from "../types/types"

export const startLogin = (email, password) => {
  return async(dispatch) => {
    console.log(email, password)

    const resp = await fetchWithoutToken('auth', {email, password}, 'POST')
    const body = await resp.json();

    console.log(body)
    if (body.ok) {
      localStorage.setItem('token', body.token);

      dispatch( login({
        uid: body.uid,
        name: body.name
      }) )
    } else {
      Swal.fire('Error', body.msg, 'error')
    }
  }
}

const login = ( user ) => ({
  type: types.authLogin,
  payload: user
})