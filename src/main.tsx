import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'

import './index.css'
import App from './routes/App.tsx'
import Project from './routes/Project.tsx'
import RootLayout from './routes/RootLayout.tsx'

const router = createHashRouter([
  { 
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: '*',
        element: <App />,
      },
      {
        path: 'projects/:projectId',
        element: <Project />,
      }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
