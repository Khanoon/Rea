import './App.css'
import { Routes,Route, HashRouter, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Page_calculateWater from './pages/Page_calculateWater'
import UI from './pages/UI';
import Ui2 from './pages/Ui2';
import UI3 from './pages/UI3';

function App() {

  return (
    <>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/calculateWater' element={<Page_calculateWater/>}/>
        <Route path='/UI' element={<UI/>}/>
        <Route path='/UI2' element={<Ui2/>}/>
        <Route path='/UI3' element={<UI3/>}/>
      </Routes>
    </>
  )
}
function Route_test() {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}
export default Route_test
