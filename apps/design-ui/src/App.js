import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import   "./App.css"
import   {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import PLAC from './nav_screen/PLAC';
import Product from './nav_screen/Product';
import Help from './nav_screen/Help';
import AppID from './nav_screen/AppID';
import Logs from './nav_screen/Logs';
import Users from './nav_screen/Users';
import ChangePassword from './nav_screen/ChangePassword';
import Signup from './nav_screen/Signup';
import Logout from './nav_screen/Logout';
import NotFound from './nav_screen/NotFound';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div className='navBar'>
      <Link className="navItemLeft" to="/" >PLAC</Link>
      <Link className="navItemRight" to="/*" >NotFound</Link>
      <Link className="navItemRight" to="/Logout" >Logout (admin)</Link>
      <Link className="navItemRight" to="/Signup" >Signup</Link>
      <Link className="navItemRight" to="/ChangePassword" >ChangePassword</Link>
      <Link className="navItemRight" to="/Users" >Users</Link>
      <Link className="navItemRight" to="/Logs" >Logs</Link>
      <Link className="navItemRight" to="/AppID" >AppID</Link>
      <Link className="navItemRight" to="/Help" >Help</Link>
      <Link className="navItemRight" to="/Product" >Product illustration</Link>
      </div>
    
      <div style={{padding:20}}>
        <Routes>
          <Route path='/' element={<PLAC/> } />
          <Route path='/Product' element={<Product/> } />
          <Route path='/Help' element={<Help/> } />
          <Route path='/AppID' element={<AppID/> } />
          <Route path='/Logs' element={<Logs/> } />
          <Route path='/Users' element={<Users/> } />
          <Route path='/ChangePassword' element={<ChangePassword/> } />
          <Route path='/Signup' element={<Signup/> } />
          <Route path='/Logout' element={<Logout/> } />
          <Route path='/*' element={<NotFound/> } />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App