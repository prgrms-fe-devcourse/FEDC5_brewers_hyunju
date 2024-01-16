import { createBrowserRouter } from 'react-router-dom';
import FeedPage from './pages/FeedPage';
import ErrorPage from './pages/ErrorPage';
import PostPage from './pages/PostPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SearchPage from './pages/SearchPage';
import App from './App';
import PersonalMessagePage from './pages/PresonalMessagePage';
import DMListPage from './pages/DMListPage';
import PostEditPage from './pages/PostEditPage';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <FeedPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/home',
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
        path: 'message',
        element: <DMListPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'message/:userId',
        element: <PersonalMessagePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'edit/:postId',
        element: <PostEditPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
