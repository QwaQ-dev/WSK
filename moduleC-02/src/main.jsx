import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/css/globals.css';
import { CountriesProvider } from './providers/countries.provider';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
      <CountriesProvider>
        <RouterProvider router={router}>

        </RouterProvider>
      </CountriesProvider>
    </main>
  </StrictMode>,
)
