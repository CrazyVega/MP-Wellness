import axios from 'axios'
import api from './axios'

// Login: obtiene access + refresh tokens
export async function login(username, password) {
  const { data } = await axios.post('/api/token/', { username, password })
  localStorage.setItem('access_token',  data.access)
  localStorage.setItem('refresh_token', data.refresh)
  return data
}

// Registro de nuevo usuario
export async function register({ username, password, email, first_name, last_name, telefono }) {
  const { data } = await api.post('/usuarios/', {
    username,
    password,
    email,
    first_name,
    last_name,
    telefono,
  })
  return data
}

// Cierra sesión borrando tokens
export function logout() {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}

// Obtiene datos del usuario actual
export async function getMe() {
  const { data } = await api.get('/usuarios/me/')
  return data
}
