import Home from "../pages/Home/Home";
import XaridQilish from "../pages/XaridQilish/XaridQilish";
import Ishlarimiz from "../pages/Ishlarimiz/Ishlarimiz";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Basket from "../pages/Basket/Basket";
import Login from "../pages/Login/Login";

export const routes = [
    {
        paths: '/',
        elements: Home
    },
    {
        paths: '/xarid',
        elements: XaridQilish
    },
    {
        paths: '/ishlarimiz',
        elements: Ishlarimiz
    },
    {
        paths: '/service',
        elements: Services
    },
    {
        paths: '/contact',
        elements: Contact
    },
    {
        paths: '/basket',
        elements: Basket
    },
    {
        paths: '/login',
        elements: Login
    }
]