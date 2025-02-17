
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/mainPage/MainPage'
import ProductsPage from './pages/productsPage/ProductsPage'
import ProductDetails from './components/productDetails/ProductDetails'
import Layout from './components/layout/Layout'
import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='/products' element={<ProductsPage/>} />
          <Route path='/productDetails/:id' element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
