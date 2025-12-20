import { createBrowserRouter } from "react-router-dom";
import TemporaryEmploymentContracts from './pages/TemporaryEmploymentContracts';
import Layout  from "./layouts/Layout";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "auth",
    children: [
      { path: "login", element: <Login/> },
    ],
  },
  ,
  {
    
    path: "/",
    element: <Layout />,
    children: [
      { path: "temporary-contrast", element: <TemporaryEmploymentContracts /> },
    ],
  },
]);

export default router;
