import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RouterPath } from './path'
import { HomePage } from '@/pages/Home/Home'
import { PostPage } from '@/pages/Post/Post'
import { MyPage } from '@/pages/MyPage/MyPage'
import Page from '@/components/templates/Page'
import { LoginPage } from '@/pages/Login/Login'
import { JoinPage } from '@/pages/Join/Join'
import { DetailPage } from '@/pages/Detail/Detail'

const router = createBrowserRouter([
  {
    path: RouterPath.ROOT,
    element: <Page home={true} />,
    children: [{ path: RouterPath.HOME, element: <HomePage /> }],
  },
  {
    path: RouterPath.ROOT,
    element: <Page />,
    children: [
      { path: RouterPath.DETAIL, element: <DetailPage /> },
      { path: RouterPath.MYPAGE, element: <MyPage /> },
    ],
  },
  {
    path: RouterPath.ROOT,
    element: <Page floatingButton={false} />,
    children: [
      { path: RouterPath.POST, element: <PostPage /> },
      { path: RouterPath.LOGIN, element: <LoginPage /> },
      { path: RouterPath.JOIN, element: <JoinPage /> },
    ],
  },
])
export const Routes = () => {
  return <RouterProvider router={router} />
}
