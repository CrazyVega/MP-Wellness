import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Auth.css'

export default function Login() {
  const { login } = useAuth()
  const navigate  = useNavigate()

  const [form,    setForm]    = useState({ username: '', password: '' })
  const [error,   setError]   = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (error) setError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const user = await login(form.username, form.password)
      // Redirige según el rol
      if (user.rol === 'admin')      navigate('/admin')
      else if (user.rol === 'terapeuta') navigate('/terapeuta')
      else navigate('/dashboard')
    } catch (err) {
      setError('Usuario o contraseña incorrectos.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-layout">
      {/* Panel izquierdo — branding */}
      <aside className="auth-brand">
        <div className="brand-noise" />
        <div className="brand-grid" />

        <div className="brand-content">
          <div className="brand-logo">
            <CrossIcon />
          </div>
          <h1 className="brand-title">MP<em>Wellness</em></h1>
          <p className="brand-tagline">
            Atención integral para el<br />bienestar de tus pacientes.
          </p>
        </div>

        <ul className="brand-features">
          <li><CheckIcon /> Gestión de citas en tiempo real</li>
          <li><CheckIcon /> Historial clínico seguro</li>
          <li><CheckIcon /> Control de roles y accesos</li>
        </ul>

        <div className="brand-decoration">
          <span className="deco-ring deco-ring-1" />
          <span className="deco-ring deco-ring-2" />
        </div>
      </aside>

      {/* Panel derecho — formulario */}
      <main className="auth-form-panel">
        <div className="auth-card" style={{ '--delay': '0s' }}>
          <header className="auth-header">
            <h2>Bienvenido de nuevo</h2>
            <p>Ingresa tus credenciales para continuar</p>
          </header>

          <form onSubmit={handleSubmit} noValidate>
            <div className="field" style={{ '--i': 0 }}>
              <label htmlFor="username">Usuario</label>
              <div className="input-wrap">
                <UserIcon />
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="tu_usuario"
                  autoComplete="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="field" style={{ '--i': 1 }}>
              <label htmlFor="password">Contraseña</label>
              <div className="input-wrap">
                <LockIcon />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {error && (
              <div className="alert-error" role="alert">
                <AlertIcon /> {error}
              </div>
            )}

            <button
              type="submit"
              className={`btn-primary ${loading ? 'btn-loading' : ''}`}
              disabled={loading}
              style={{ '--i': 2 }}
            >
              {loading ? <span className="spinner-sm" /> : 'Iniciar sesión'}
            </button>
          </form>

          <footer className="auth-footer">
            ¿No tienes cuenta?{' '}
            <Link to="/register">Regístrate aquí</Link>
          </footer>
        </div>
      </main>
    </div>
  )
}

/* ——— Iconos SVG inline ——— */
function CrossIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="2"  width="8" height="28" rx="2" fill="currentColor"/>
      <rect x="2"  y="12" width="28" height="8" rx="2" fill="currentColor"/>
    </svg>
  )
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function UserIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function LockIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <rect x="4" y="9" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 9V6a3 3 0 016 0v3" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="13.5" r="1.5" fill="currentColor"/>
    </svg>
  )
}
function AlertIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M8 5v3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="8" cy="11" r="0.75" fill="currentColor"/>
    </svg>
  )
}
