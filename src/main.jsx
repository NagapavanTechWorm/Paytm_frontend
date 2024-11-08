import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from "../src/router/route.jsx"
import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
    <RouterProvider router={router} />
    </RecoilRoot>
  </StrictMode>,
)
