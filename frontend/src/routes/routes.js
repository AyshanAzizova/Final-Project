    import MainRoot from "../pages/MainRoot";
    import Home from '../pages/Home/Home'
    import About from '../pages/About/About'
    import Blog from '../pages/Blog/Blog'
    import Contact from '../pages/Contact/Contact'
    import Products from '../pages/Products/Products'
    import ProductDetail from "../pages/ProductDetail/ProductDetail";
    import Wishlist from "../pages/Wishlist/Wishlist";
    import SignIn from "../pages/SignIn/SignIn";
    import SignInAdmin from '../pages/Admin/AdminSignIn'
    import SignUp from "../pages/SignUp/SignUp";
    import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
    import ResetPassword from "../pages/ResetPassword/ResetPassword";
    import Cart from "../components/Cart/Cart";
    import Checkout from "../pages/Checkout/Checkout";
    import AdminRoot from "../pages/AdminRoot";
    import AdminProducts from "../pages/Admin/AdminProducts";
    import AddProduct from "../pages/Admin/AddProduct";
    import Customers from "../pages/Admin/Customers";
    import Orders from "../pages/Admin/Orders";



    export const ROUTES = [
            // MainRoot
        {
            path:'/',
            element:<MainRoot/>,
            children:[
                {
                    path:'',
                    element:<Home/>
                },
                {
                    path:'about',
                    element:<About/>
                },
                {
                    path:'blog',
                    element:<Blog/>
                },
                {
                    path:'contact',
                    element:<Contact/>
                },
                {
                    path:'products',
                    element:<Products/>
                },
                {
                    path:"products/:id",
                    element: <ProductDetail />
                }
                ,
                {
                    path:'wishlist',
                    element:<Wishlist/>
                },
                {
                    path:'checkout',
                    element:<Checkout/>
                },
                {
                    path:'cart',
                    element:<Cart/>
                },
                {
                    path:'signin',
                    element:<SignIn/>
                },
                {
                    path:'signup',
                    element:<SignUp/>
                },
                {
                    path:'forgotpassword',
                    element:<ForgotPassword/>
                },
                {
                    path:'resetPassword',
                    element:<ResetPassword/>
                }
            ]
        },
            // AdminRoot
            {
                path: '/admin',
                element: <AdminRoot/>,
                children: [
                    {
                        path:'',
                        element:<SignInAdmin/>
                    },
                    {
                        path: 'products',
                        element: <AdminProducts />
                    },
                    {
                        path:'customers',
                        element:<Customers/>
                    },
                    {
                        path:'orders',
                        element:<Orders/>
                    },
                    {
                        path: 'addProduct',
                        element: <AddProduct/>
                    }
                ]
            }
    ]