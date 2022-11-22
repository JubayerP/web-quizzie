
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorElement from './components/ErrorElement/ErrorElement';
import Home from './components/Home/Home';
import Quizes from './components/Quizes/Quizes';
import Statistics from './components/Statistics/Statistics';
import Topic from './components/Topic/Topic';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorElement />,
      element: <Main />,
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/topics',
          element: <Topics />
        },
        {
          path: '/topic/:id',
          element: <Quizes />,
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        {
          path: '/statistics',
          element: <Statistics />
        },
        {
          path: '/blog',
          element: <Blog />
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
