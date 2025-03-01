import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterItem from './pages/master-item.jsx';
import { __local__ } from './__config__/index.jsx';
import Invoice from './pages/invoice.jsx';
import AddDataPenjualan from './pages/addDataPenjualan.jsx';
import PrintInvoice from './pages/printInvoice.jsx';
const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/master-item',
    element: <MasterItem></MasterItem>
  },
  {
    path: '/invoice',
    element: <Invoice></Invoice>
  },
  {
    path: '/addDataPenjualan',
    element: <AddDataPenjualan></AddDataPenjualan>
  },
  {
    path: '/print/:no_invoice',
    element: <PrintInvoice></PrintInvoice>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <__local__>

      <RouterProvider router={browserRouter}></RouterProvider>
    </__local__>
  </StrictMode>,
)
