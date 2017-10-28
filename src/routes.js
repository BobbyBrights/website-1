import Home from 'components/Home'
import Blog from 'components/Blog'

export default [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/blog/:id',
        exact: true,
        component: Blog,
    },
]
