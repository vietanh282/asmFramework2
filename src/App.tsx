import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import ListProduct from './page/Admin/Product/product'
import AdminLayout from './component/layout/admin'
import WebsiteLayout from './page/WebsiteLayout'
import AddProductPage from './page/Admin/Product/add'
import EditProduct from './page/Admin/Product/edit'
import ListCategory from './page/Admin/category/list'
import EditCategory from './page/Admin/category/edit'
import Detailproduct from './page/Detailproduct'
import Cart from './page/Cart'
import { CartProvider } from 'react-use-cart'
import Home from './page/Home/Home'
import AddCategory from './page/Admin/category/add'
function App() {
  
  const [count, setCount] = useState(0)
  const newLocal = "auto"
  return (
    <div>
      <main>
        <Routes>
          <Route path='/' element={<CartProvider><WebsiteLayout /></CartProvider>}>
            <Route index element={<Home />} />
            <Route path='/detail/:id' element={<Detailproduct />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
          <Route path='admin' element={<AdminLayout />}>
            <Route index element={<Navigate to={"product"} />} />
            <Route path='product'>
              <Route index element={<ListProduct />} />
              <Route path='add' element={<AddProductPage />} />
              <Route path='edit/:id' element={<EditProduct />} />
            </Route>
            <Route path='categories'>
              <Route index element={<ListCategory />} />
             <Route path='add' element={<AddCategory />} />
              <Route path='edit/:id' element={<EditCategory />} />
            </Route>

          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
