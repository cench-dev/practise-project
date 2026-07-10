import { useAuthDispatch, useAuthSelector } from '../../hooks/useAuthDispatch';
import { changeRole } from '../../Reducers/authReducer';
import { Button } from '../../Components/UI/Button/Button';
import maleIcon from '../../assets/avatar_male.svg';
import styles from './Account.module.scss';
function Account() {
  const {isAuth, isAdmin} = useAuthSelector()
  const dispatch = useAuthDispatch()

  const onChangeRole = () => {
    dispatch(changeRole(!isAdmin))
  }

  return (
    <>
      <section className={styles.account__header}>
        <div className={styles.container}>
          <p>Добро пожаловать user!</p>
          <Button>
            Выйти
          </Button>
        </div>
      </section>
      <main className={styles.container}>
        <section className={styles.account__info}>
          <img src={maleIcon} className={styles.avatar}></img>
          {/* <!--<h1>{isAuth ? 'Authorized' : 'Unauthorized'}</h1>

          <h2>{isAdmin ? 'Admin' : 'User'}</h2>
          <button onClick={onChangeRole}>Change role</button> */}
          <div>
            <h1 className={styles.title}>Привет, user!</h1>
            <div className={styles.account__count}>
              <div className={styles.meta}>
                <div className={styles.stats}>
                  <h2>Прочитано книг</h2>
                  <p className={styles.count}>700</p>
                </div>
                <div className={styles.stats}>
                  <h2>Хочу прочитать</h2>
                  <p className={styles.count}>800</p>
                </div>
                <div className={styles.stats}>
                  <h2>Цель прочитать на 2026 год</h2>
                  <p className={styles.count}>800</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Account