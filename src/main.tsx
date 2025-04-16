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
import Organization from "./components/client/organization/Organization.tsx";
import TimeLine from "./components/client/timeline/TimeLine.tsx";
import Travel from "./components/client/travel/Travel.tsx";
import Paper from "./components/client/papers/Paper.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: ClientLayout,
    children: [
      { index: true, Component: Client },
      { path: "organization", Component: Organization },
      {
        path: "paper",
        Component: Paper,
      },
      { path: "time-line", Component: TimeLine },
      { path: "travel", Component: Travel },
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
