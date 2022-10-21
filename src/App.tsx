import './assets/scss/app.scss'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { CartPage } from './pages/CartPage'

export const  App = () => {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}
