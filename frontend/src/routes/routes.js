import MainRoot from "../pages/MainRoot";
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Blog from '../pages/Blog/Blog'
import Contact from '../pages/Contact/Contact'
import Products from '../pages/Products/Products'
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Wishlist from "../pages/Wishlist/Wishlist";



export const ROUTES = [
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
                path:'productDetail',
                element:<ProductDetail/>
            },
            {
                path:'wishlist',
                element:<Wishlist/>
            }
        ]
    }
]