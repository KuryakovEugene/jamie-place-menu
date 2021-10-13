
import {ADMIN_ROUTE, ADMIN_LOGIN_ROUTE, HOME_ROUTE} from "./utils/const";
import AdminLogin from "./components/AdminLogin";
import AdminPage from "./components/AdminPage";
import Main from "./components/Main";

export const publicRoutes = [
    {
        path: ADMIN_LOGIN_ROUTE,
        Component: AdminLogin
    },
    {
        path: HOME_ROUTE,
        Component: Main
    }
]

export const privateRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    }
]