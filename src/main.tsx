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
import ImageManager from "./components/admin/files/image/ImageManager.tsx";
import Banner from "./components/admin/home/Banner.tsx";
import OrganizationAdmin from "./components/admin/organization/OrganizationAdmin.tsx";
import PaperGuideline from "./components/admin/paper/PaperGuideline.tsx";
import PaperAbstract from "./components/admin/paper/PaperAbstract.tsx";
import PaperFulltext from "./components/admin/paper/PaperFulltext.tsx";
import TravelInfo from "./components/admin/travel/TravelInfo.tsx";
import ATimeCount from "./components/admin/home/ATimeCount.tsx";
import AInformation from "./components/admin/home/AInformation.tsx";
import AConferenceTheme from "./components/admin/home/AConferenceTheme.tsx";
import ATimeLine from "./components/admin/home/ATimeLine.tsx";
import AGuideline from "./components/admin/home/AGuideline.tsx";
import AdminTimeLine from "./components/admin/timeline/AdminTimeLine.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: ClientLayout,
    children: [
      { index: true, Component: Client },
      { path: "organization", Component: Organization },
      { path: "paper", Component: Paper, },
      { path: "time-line", Component: TimeLine },
      { path: "travel", Component: Travel },
    ]
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: Admin },
      { path: "files", Component: ImageManager },
      // home
      { path: "banner", Component: Banner },
      { path: "time-count", Component: ATimeCount },
      { path: "information", Component: AInformation },
      { path: "conference-theme", Component: AConferenceTheme },
      { path: "home-timeline", Component: ATimeLine },
      { path: "home-guidleline", Component: AGuideline },
      // Organization
      { path: "organization", Component: OrganizationAdmin },
      // Paper
      { path: "guideline", Component: PaperGuideline },
      { path: "abstract", Component: PaperAbstract },
      { path: "fulltext", Component: PaperFulltext },
      // Timeline
      { path: "timeline", Component: AdminTimeLine },
      // Travel
      { path: "travel", Component: TravelInfo },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
