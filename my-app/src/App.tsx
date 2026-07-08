import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Pages/Login/Login';
import { Provider } from 'react-redux';
import { authStore } from './Stores/authStore'
import { useEffect } from 'react';

import './App.css'
import Account from './Pages/Account/Account';

function App() {

  return (
    <>
      <Provider store={authStore}>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/' element={<ProtectedPages />}/>
              <Route path='/user/:id' element={<Account />}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

function ProtectedPages() {
  const navigate = useNavigate()

  const { isAuth } = authStore.getState().auth

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth])

  if (!isAuth) return <></>

  return (
    <>
      <h1>Header</h1>
      <Outlet />
    </>
    
  )
}

export default App
