import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Pages/Login/Login';
import { Provider, useSelector } from 'react-redux';
import { authStore } from './Stores/authStore';
import { useEffect } from 'react';
import type { RootState } from './Stores/authStore';
import './App.css'
import Account from './Pages/Account/Account';


function App() {
  return (
    <Provider store={authStore}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />

          <Route element={<ProtectedPages />}>
            <Route path='/user/:id' element={<Account />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

function ProtectedPages() {
  const navigate = useNavigate();
  const isAuth = useSelector(
    (state: RootState) => state.auth.isAuth
  );

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth]);

  if (!isAuth) {
    return null;
  }

  return (
    <>
      <Outlet />
    </>
  )
}


export default App;