import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import FeedPage from './pages/FeedPage';
import PostPage from './pages/PostPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SearchPage from './pages/SearchPage';
import PersonalMessagePage from './pages/PresonalMessagePage';
import DMListPage from './pages/DMListPage';
import PostEditPage from './pages/PostEditPage';
import NotificationPage from './pages/NotificationPage';
import NotFoundTemplate from '~/components/templates/NotFoundTemplate';
import ErrorTemplate from '~/components/templates/ErrorTemplate';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFoundTemplate />,
    children: [
      {
        path: '/',
        element: <FeedPage />,
        errorElement: <ErrorTemplate />,
      },
      {
        path: '/home',
        element: <FeedPage />,
        errorElement: <ErrorTemplate />,
      },
      {
        path: 'login',
        element: <LoginPage />,
        errorElement: <ErrorTemplate />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
        errorElement: <ErrorTemplate />,
      },
      {
        path: 'search/',
        element: <SearchPage />,
        errorElement: <ErrorTemplate />,
      },
      {
        path: 'post/:postId',
        element: <PostPage />,
        errorElement: <ErrorTemplate />,
      },
      {
        path: 'profile/:userId',
        element: <ProfilePage />,
        errorElement: <ErrorTemplate />,
      },
      {
        path: 'message',
        element: <DMListPage />,
        errorElement: <ErrorTemplate />,
      },
      {
        path: 'message/:userId',
        element: <PersonalMessagePage />,
        errorElement: <ErrorTemplate />,
      },
      {
        path: 'edit/:postId',
        element: <PostEditPage />,
        errorElement: <ErrorTemplate />,
      },
      {
        path: 'notification',
        element: <NotificationPage />,
        errorElement: <ErrorTemplate />,
      },
    ],
  },
]);

export default router;
