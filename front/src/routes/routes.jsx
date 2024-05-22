import Add from "../pages/admin/Add/Add";
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Basket from "../pages/site/Basket/Basket";
import Details from "../pages/site/Details/Details";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";

const ROUTES = ([
    {
        path: '/',
        element: <SiteRoot/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'basket',
                element: <Basket/>
            },
            {
                path: 'details/:id',
                element: <Details/>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminRoot/>,
        children: [
            {
                path: '',
                element: <Dashboard/>
            },
            {
                path: 'products',
                element: <Products/>
            },
            {
                path: 'add',
                element: <Add/>
            }
        ]
    }
])

export default ROUTES