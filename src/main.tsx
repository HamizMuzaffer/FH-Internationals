import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.tsx'
import { Toaster } from "react-hot-toast";
import { AuthProvider } from './context/AuthContext.tsx';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <AuthProvider>
   <RouterProvider router={router}/>
   </AuthProvider>

  </StrictMode>,
)
