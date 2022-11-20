
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorElement from './components/ErrorElement/ErrorElement';
import Home from './components/Home/Home';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorElement />,
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/home',
          element: <Home />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
