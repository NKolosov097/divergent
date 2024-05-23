import React from 'react';

const MainPage = React.lazy(() => import('../pages/Main/Main'))
const Article = React.lazy(() => import('../pages/Article/Article'))

interface IListRoutes {
    element: JSX.Element,
    path: string
}

export const ListRoutes: IListRoutes[] = [
    {
        element: <MainPage />,
        path: '/'
    },
    {
        element: <Article />,
        path: '/articles/:id'
    }
]