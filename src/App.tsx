import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import ListProduct from './page/Admin/Product/product'
import AdminLayout from './component/layout/admin'
import Home from './page/home'
import WebsiteLayout from './page/WebsiteLayout'
import AddProductPage from './page/Admin/Product/add'
import EditProduct from './page/Admin/Product/edit'
import ListCategory from './page/Admin/category/list'
import EditCategory from './page/Admin/category/edit'
function App(props: any) {
  const [products, setProducts] = useState([])
  const fetchProduct = async function() {
    const data = await(await fetch('https://62de615accdf9f7ec2d66ae3.mockapi.io/api/products')).json()
    setProducts(data)
  }
  useEffect(() => {
    fetchProduct()
  }, [])
  const [count, setCount] = useState(0)
  const newLocal = "auto"
  return (
    <div>
      <main>
        <Routes>
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<Home />} />
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
            {/* <Route path='add' element={<AddCategory />} /> */}
            <Route path='edit/:id' element={<EditCategory />} />
          </Route>

          </Route>
          <Route path='category'>
            <Route index element={<ListCategory />} />
            

          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
