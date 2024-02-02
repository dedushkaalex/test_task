import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HomePage } from 'pages/home-page';
import { RootLayout } from 'app/layouts/root-layout';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: '/',
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
