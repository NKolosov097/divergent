import React from 'react';

const MainPage = React.lazy(() => import('../pages/Main/Main'))
const Article = React.lazy(() => import('../pages/Article/Article'))
const Page404 = React.lazy(() => import('../pages/Page404/Page404'))

interface IListRoutes {
    element: JSX.Element,
    path: string
}

export const ListRoutes: IListRoutes[] = [
    {
        element: <MainPage />,
        path: '/divergent'
    },
    {
        element: <Article />,
        path: '/divergent/articles/:id'
    },
    {
        element: <Page404 />,
        path: '*'
    }
]