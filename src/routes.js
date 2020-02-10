import { Home } from './modules/Home';
import { Policy } from './modules/Policy';

export default [
    {
        path: '/',
        Component: Home,
        exact: true,
    },
    {
        path: '/policy',
        Component: Policy,
    },
];
