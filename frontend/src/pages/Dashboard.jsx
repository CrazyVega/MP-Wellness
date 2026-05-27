import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      fontFamily: 'var(--font-body)',
      color: 'var(--navy-900)'
    }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '32px' }}>
        ¡Bienvenido, {user?.first_name || user?.username}!
      </h1>
      <p style={{ color: 'var(--slate-600)', fontSize: '15px' }}>
        Rol: <strong>{user?.rol}</strong>
      </p>
      <button
        onClick={handleLogout}
        style={{
          marginTop: '16px',
          padding: '10px 24px',
          background: 'var(--navy-800)',
          color: '#fff',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          fontWeight: 600,
        }}
      >
        Cerrar sesión
      </button>
    </div>
  )
}
