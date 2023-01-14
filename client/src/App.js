import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import About from './About';
import Home from './Home';
import Predict from './Predict';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/predict',
    element: <Predict />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
