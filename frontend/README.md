# MP Wellness — Frontend

Frontend React (Vite) para el sistema de gestión de bienestar MP Wellness.

## Requisitos

- Node.js 18+
- Backend Django corriendo en `http://localhost:8000`

## Instalación

```bash
npm install
npm run dev
```

El servidor de desarrollo estará en `http://localhost:5173`.

Las peticiones a `/api/*` y `/api/token/*` se redirigen automáticamente al backend en `:8000` (proxy configurado en `vite.config.js`).

## Estructura

```
src/
├── api/
│   ├── axios.js        # Instancia Axios con interceptores JWT
│   └── auth.js         # Login, register, logout, getMe
├── context/
│   └── AuthContext.jsx # Estado global de autenticación
├── components/
│   └── ProtectedRoute.jsx
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx    # Formulario de 2 pasos
│   └── Dashboard.jsx   # Placeholder (expandir por rol)
└── styles/
    └── index.css
```

## Rutas

| Ruta         | Acceso     | Descripción                   |
|--------------|------------|-------------------------------|
| `/login`     | Público    | Inicio de sesión JWT          |
| `/register`  | Público    | Registro de clientes (2 pasos)|
| `/dashboard` | Autenticado| Panel principal               |

## Notas del backend

El endpoint `/api/usuarios/` y `/api/usuarios/me/` **deben crearse** en el backend para que el registro y la carga del usuario funcionen. Ver `src/api/auth.js`.

Los tokens JWT se guardan en `localStorage` y se refrescan automáticamente al expirar.
