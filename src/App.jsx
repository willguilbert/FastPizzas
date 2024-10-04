import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './ui/Home'
import Menu, { loader as menuloader } from './features/menu/Menu'

import Cart from './features/cart/Cart'
import Order, { loader as orderloader } from './features/order/Order'
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder'
import AppLayout from './ui/AppLayout'
import Error from './ui/Error'
import { action as updateOrderAction } from './features/order/UpdateOrder'
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuloader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/:orderid',
        element: <Order />,
        loader: orderloader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {},
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
