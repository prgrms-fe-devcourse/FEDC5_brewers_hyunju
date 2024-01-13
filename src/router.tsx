import { createBrowserRouter } from 'react-router-dom';
import FeedPage from './pages/FeedPage';
import ErrorPage from './pages/ErrorPage';
import PostPage from './pages/PostPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SearchPage from './pages/SearchPage';
import Test from './Test';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FeedPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'signup',
    element: <SignupPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'search/',
    element: <SearchPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'post/:postId',
    element: <PostPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'profile/:userId',
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'test-modal',
    element: <Test />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
