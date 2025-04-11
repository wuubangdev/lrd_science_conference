import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClientLayout from "./ClientLayout.tsx";
import AdminLayout from "./AdminLayout.tsx";
import Client from "./components/client/Client.tsx";
import Admin from "./components/admin/Admin.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: ClientLayout,
    children: [
      { index: true, Component: Client },
      { path: "paper", Component: () => <div>123</div> }
    ]
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: Admin }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
