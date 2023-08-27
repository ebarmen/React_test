
import { Navigate, createBrowserRouter } from 'react-router-dom'
import LayoutHeader from './LayoutHeader'
import LoginPage from './pages/LoginPage'
import Mainpage from './pages/Mainpage'
import NewsPage from './pages/NewsPage'
import ProfilePage from './pages/ProfilePage'






function GuestGuard({ children }) {
  const isAuthorized = localStorage.getItem('isAuth')


  if (!isAuthorized) return <Navigate to="/login" />

  return children
}




export const appRouter = () =>
  createBrowserRouter([
    {
      element: <LayoutHeader/>,
      errorElement: <div>error</div>,
      children: [
        {
          path: '/login',
          element: (
              <LoginPage />
          ),
        },
        {
          path: '/profile',
          element: (
            <GuestGuard>
              <ProfilePage />
            </GuestGuard>
          ),
        },
        {
          path: '/news',
          element: (
              <NewsPage />
          ),
        },
        {
          path: '/',
          element: <Mainpage />,
        },
       
      ],
    }  
  ])
