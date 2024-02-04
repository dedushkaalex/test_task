import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HomePage } from 'pages/home-page';
import { RootLayout } from 'app/layouts/root-layout';
import { NotFoundPage } from 'pages/error-page';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: '/',
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
