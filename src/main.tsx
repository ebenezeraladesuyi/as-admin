import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import IsLoading from './pages/isLoading/IsLoading'
import { RouterProvider } from 'react-router-dom'
import { element } from './routes/Router'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Suspense fallback={<IsLoading />}>
      <RouterProvider router={element} />
      <ToastContainer />
    </Suspense>
  </StrictMode>,
)
