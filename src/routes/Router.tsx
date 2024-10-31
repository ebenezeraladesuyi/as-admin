import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
// import UploadBlog from "../pages/dashboard/UploadBlog";
import { lazy } from "react";
// import AllSubscribers from "../pages/dashboard/AllSubscribers";


const UploadBlog = lazy(() => import("../pages/dashboard/UploadBlog"))
const AllSubscribers = lazy(() => import("../pages/dashboard/AllSubscribers"))



export const element = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <UploadBlog />,
            },
            {
                path: "/subscribers",
                element: <AllSubscribers />
            }
        ]
    }
])

