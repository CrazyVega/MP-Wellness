import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../api/auth'
import { useAuth } from '../context/AuthContext'
import './Auth.css'

const INITIAL = {
  first_name: '', last_name: '',
  username: '', email: '',
  telefono: '', password: '', password2: '',
}

export default function Register() {
  const { login } = useAuth()
  const navigate  = useNavigate()

  const [form,    setForm]    = useState(INITIAL)
  const [errors,  setErrors]  = useState({})
  const [loading, setLoading] = useState(false)
  const [step,    setStep]    = useState(1) // 1 = datos personales, 2 = credenciales

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  function validateStep1() {
    const e = {}
    if (!form.first_name.trim()) e.first_name = 'Requerido'
    if (!form.last_name.trim())  e.last_name  = 'Requerido'
    if (!form.telefono.trim())   e.telefono   = 'Requerido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function validateStep2() {
    const e = {}
    if (!form.username.trim())  e.username = 'Requerido'
    if (!form.email.trim())     e.email    = 'Email inválido'
    if (form.password.length < 8) e.password = 'Mínimo 8 caracteres'
    if (form.password !== form.password2) e.password2 = 'Las contraseñas no coinciden'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function nextStep(e) {
    e.preventDefault()
    if (validateStep1()) setStep(2)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validateStep2()) return
    setLoading(true)
    try {
      await register({
        username: form.username, password: form.password,
        email: form.email, first_name: form.first_name,
        last_name: form.last_name, telefono: form.telefono,
      })
      await login(form.username, form.password)
      navigate('/dashboard')
    } catch (err) {
      const data = err.response?.data
      if (data?.username) setErrors(prev => ({ ...prev, username: 'Ese usuario ya existe' }))
      else setErrors(prev => ({ ...prev, general: 'Error al crear la cuenta. Intenta de nuevo.' }))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-layout">
      {/* Panel izquierdo */}
      <aside className="auth-brand">
        <div className="brand-noise" />
        <div className="brand-grid" />
        <div className="brand-content">
          <div className="brand-logo"><CrossIcon /></div>
          <h1 className="brand-title">MP<em>Wellness</em></h1>
          <p className="brand-tagline">
            Tu salud, nuestra<br />prioridad.
          </p>
        </div>

        {/* Indicador de pasos */}
        <div className="register-steps">
          <div className={`step-item ${step >= 1 ? 'active' : ''}`}>
            <span className="step-num">1</span>
            <span>Datos personales</span>
          </div>
          <div className="step-line" />
          <div className={`step-item ${step >= 2 ? 'active' : ''}`}>
            <span className="step-num">2</span>
            <span>Credenciales</span>
          </div>
        </div>

        <div className="brand-decoration">
          <span className="deco-ring deco-ring-1" />
          <span className="deco-ring deco-ring-2" />
        </div>
      </aside>

      {/* Panel derecho */}
      <main className="auth-form-panel">
        <div className="auth-card">
          <header className="auth-header">
            <h2>{step === 1 ? 'Crear cuenta' : 'Elige tus credenciales'}</h2>
            <p>
              {step === 1
                ? 'Cuéntanos quién eres'
                : 'Casi listo — configura tu acceso'}
            </p>
          </header>

          {/* Paso 1 */}
          {step === 1 && (
            <form onSubmit={nextStep} noValidate>
              <div className="field-row">
                <div className="field" style={{ '--i': 0 }}>
                  <label>Nombre</label>
                  <div className="input-wrap">
                    <UserIcon />
                    <input name="first_name" placeholder="Ana" value={form.first_name} onChange={handleChange} />
                  </div>
                  {errors.first_name && <span className="field-error">{errors.first_name}</span>}
                </div>
                <div className="field" style={{ '--i': 1 }}>
                  <label>Apellido</label>
                  <div className="input-wrap">
                    <UserIcon />
                    <input name="last_name" placeholder="López" value={form.last_name} onChange={handleChange} />
                  </div>
                  {errors.last_name && <span className="field-error">{errors.last_name}</span>}
                </div>
              </div>

              <div className="field" style={{ '--i': 2 }}>
                <label>Teléfono</label>
                <div className="input-wrap">
                  <PhoneIcon />
                  <input name="telefono" type="tel" placeholder="+57 300 000 0000"
                    value={form.telefono} onChange={handleChange} />
                </div>
                {errors.telefono && <span className="field-error">{errors.telefono}</span>}
              </div>

              <button type="submit" className="btn-primary" style={{ '--i': 3 }}>
                Continuar →
              </button>
            </form>
          )}

          {/* Paso 2 */}
          {step === 2 && (
            <form onSubmit={handleSubmit} noValidate>
              <div className="field" style={{ '--i': 0 }}>
                <label>Usuario</label>
                <div className="input-wrap">
                  <AtIcon />
                  <input name="username" placeholder="ana_lopez" value={form.username} onChange={handleChange} />
                </div>
                {errors.username && <span className="field-error">{errors.username}</span>}
              </div>

              <div className="field" style={{ '--i': 1 }}>
                <label>Correo electrónico</label>
                <div className="input-wrap">
                  <MailIcon />
                  <input name="email" type="email" placeholder="ana@email.com"
                    value={form.email} onChange={handleChange} />
                </div>
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="field-row">
                <div className="field" style={{ '--i': 2 }}>
                  <label>Contraseña</label>
                  <div className="input-wrap">
                    <LockIcon />
                    <input name="password" type="password" placeholder="••••••••"
                      value={form.password} onChange={handleChange} />
                  </div>
                  {errors.password && <span className="field-error">{errors.password}</span>}
                </div>
                <div className="field" style={{ '--i': 3 }}>
                  <label>Confirmar</label>
                  <div className="input-wrap">
                    <LockIcon />
                    <input name="password2" type="password" placeholder="••••••••"
                      value={form.password2} onChange={handleChange} />
                  </div>
                  {errors.password2 && <span className="field-error">{errors.password2}</span>}
                </div>
              </div>

              {errors.general && (
                <div className="alert-error" role="alert">
                  <AlertIcon /> {errors.general}
                </div>
              )}

              <div className="btn-group">
                <button type="button" className="btn-ghost" onClick={() => setStep(1)}>
                  ← Atrás
                </button>
                <button type="submit"
                  className={`btn-primary ${loading ? 'btn-loading' : ''}`}
                  disabled={loading} style={{ '--i': 4 }}>
                  {loading ? <span className="spinner-sm" /> : 'Crear cuenta'}
                </button>
              </div>
            </form>
          )}

          <footer className="auth-footer">
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
          </footer>
        </div>
      </main>
    </div>
  )
}

/* ——— Iconos ——— */
function CrossIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none">
      <rect x="12" y="2"  width="8" height="28" rx="2" fill="currentColor"/>
      <rect x="2"  y="12" width="28" height="8" rx="2" fill="currentColor"/>
    </svg>
  )
}
function UserIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function LockIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <rect x="4" y="9" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 9V6a3 3 0 016 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="13.5" r="1.5" fill="currentColor"/>
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M5 3h3l1.5 3.5-1.8 1.1a9.5 9.5 0 004.7 4.7l1.1-1.8L17 12v3a1 1 0 01-1 1A13 13 0 014 4a1 1 0 011-1z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function MailIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function AtIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13 10c0 2 .8 3 2 3s2-1.5 2-3a7 7 0 10-4 6.3" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round"/>
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
