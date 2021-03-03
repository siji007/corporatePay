import Manage from './components/Manage'
import Dashboard from './components/Dashboard'
import PaymentCategories from './components/PaymentCategories'
export const routes = [
    {path:'/',component:Dashboard },
    {path:'/manage', component: Manage},
    {path: '/payment_categories', component:PaymentCategories},
    { path: '*', redirect: '/' }
];