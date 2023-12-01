import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/Home';
import RegisterPage from './Pages/Register';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
