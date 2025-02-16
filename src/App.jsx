
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/mainPage/MainPage'
import ProductsPage from './pages/productsPage/ProductsPage'
import ProductDetails from './components/productDetails/ProductDetails'
import Layout from './components/layout/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='/products' element={<ProductsPage/>} />
          <Route path='/productDetails' element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
