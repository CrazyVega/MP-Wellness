import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home'

import Login from './pages/Login'

import Dashboard from './pages/Dashboard'

import Agendar from './pages/Agendar'
import AdminCitas from './pages/AdminCitas'
import MainLayout from './layouts/MainLayout'

import ProtectedRoute from './routes/ProtectedRoute'


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />

        <Route
          path="/agendar"
          element={
            <ProtectedRoute>

              <Agendar />

            </ProtectedRoute>
          }
        />
<Route
  path="/admin-citas"
  element={
    <ProtectedRoute>

      <AdminCitas />

    </ProtectedRoute>
  }
/>
      </Routes>

    </BrowserRouter>
  )
}

export default App