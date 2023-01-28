import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/about', element: <About></About> },
        { path: '/products', element: <Products></Products> },
        {
          path: '/friends',
          element: <Friends></Friends>,
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/users`);
          }
        },
        {
          path: '/friend/:friendId',
          element: <FriendDetails></FriendDetails>,
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
          }
        },
        {
          path: '/posts',
          element: <Posts></Posts>,
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/posts`)
          }
        },
        {
          path: '/post/:postId',
          element: <PostDetails></PostDetails>,
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
          }
        }
      ]
    },
    {
      path: '/services',
      element: <Services></Services>
    },
    {
      path: '/*',
      element: <ErrorPage></ErrorPage>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
