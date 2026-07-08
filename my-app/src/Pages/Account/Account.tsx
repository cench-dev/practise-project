import { useAuthDispatch, useAuthSelector } from '../../hooks/useAuthDispatch';
import { changeRole } from '../../Reducers/authReducer';

function Account() {
  const {isAuth, isAdmin} = useAuthSelector()
  const dispatch = useAuthDispatch()

  const onChangeRole = () => {
    dispatch(changeRole(!isAdmin))
  }

  return (
    <>
      <h1>{isAuth ? 'Authorized' : 'Unauthorized'}</h1>
      <h2>{isAdmin ? 'Admin' : 'User'}</h2>
      <button onClick={onChangeRole}>Change role</button>
    </>
  )
}

export default Account