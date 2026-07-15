import { useAuthDispatch, useAuthSelector } from '../../hooks/useAuthDispatch';
import { changeRole } from '../../Reducers/authReducer';
import { Button } from '../../Components/UI/Button/Button';
import { ReadBooks } from '../../Components/ReadBooks/ReadBooks';
import { PlannedBooks } from '../../Components/PlannedBooks/PlannedBooks';
import { Wishlist } from '../../Components/Wishlist/Wishlist';
import maleIcon from '../../assets/avatar_male.svg';
import styles from './Account.module.scss';
import { useState } from 'react';
import { books, type BookStatus } from '../../mock/mock';

const tabs: { id: BookStatus; label: string}[] = [
  { id: 'READ', label: 'Прочитано'},
  { id: 'PLANNED', label: 'Хочу прочитать'},
  { id: 'WISHLIST', label: 'Wishlist'}
];



function Account() {
  const {isAuth, isAdmin} = useAuthSelector();
  const [activeTab, setActiveTab] = useState<BookStatus>('READ');

  const dispatch = useAuthDispatch();
  const onChangeRole = () => {
    dispatch(changeRole(!isAdmin))
  }

  return (
    <>
      <section className={styles.account__header}>
        <div className={styles.account__headerContent}>
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
                  <p>Прочитано книг</p>
                  <p className={styles.count}>{books.filter(book => book.status === 'READ').length}</p>
                </div>
                <div className={styles.stats}>
                  <p>Хочу прочитать</p>
                  <p className={styles.count}>{books.filter(book => book.status === 'PLANNED').length}</p>
                </div>
                <div className={styles.stats}>
                  <p>Цель прочитать на 2026 год</p>
                  <p className={styles.count}>800</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.content}>
          <div className={styles.buttons}>
            {tabs.map((tab) =>(
              <Button key={tab.id} active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)}>{tab.label}</Button>
            ))}
          </div>
          {activeTab === 'READ' && <ReadBooks />}
          {activeTab === 'PLANNED' && <PlannedBooks />}
          {activeTab === 'WISHLIST' && <Wishlist />}
        </section>
      </main>
    </>
  )
}

export default Account