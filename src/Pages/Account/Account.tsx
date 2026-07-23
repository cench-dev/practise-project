import { Button } from '../../Components/UI/Button/Button';
import { ReadBooks } from '../../Components/ReadBooks/ReadBooks';
import { PlannedBooks } from '../../Components/PlannedBooks/PlannedBooks';
import { Wishlist } from '../../Components/Wishlist/Wishlist';
import maleIcon from '../../assets/avatar_male.svg';
import styles from './Account.module.scss';
import { useEffect, useState } from 'react';
import type { BookStatus } from '../../Types/BookTypes';
import { useBooks } from '../../Hooks/useBooks';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../Stores/authStore';
import { signOut } from '../../Reducers/AuthReducer';
import { useUserId } from '../../Hooks/useUserId';
import { getUser } from '../../api/userApi';
import type { User } from '../../Types/UserTypes';
import { updateGoal } from '../../api/userApi';
import { Input } from '../../Components/UI/Input/Input';

const tabs: { id: BookStatus; label: string}[] = [
  { id: 'READ', label: 'Прочитано'},
  { id: 'PLANNED', label: 'Хочу прочитать'},
  { id: 'WISHLIST', label: 'Wishlist'}
];

function Account() {
  const [activeTab, setActiveTab] = useState<BookStatus>('READ');
  const dispatch = useDispatch();
  const userId = useUserId(); 
  const [profile, setProfile] = useState<User | null>(null);
  const [isGoalEdit, setIsGoalEdit] = useState(false);
  const [goal, setGoal] = useState(profile?.readingGoal ?? 0);
  const [year, setYear] = useState(profile?.goalYear ?? new Date().getFullYear());
  const navigate = useNavigate();

  const user = useSelector(
    (state: RootState) => state.auth.user
  );

  if (!user) {
    return null;
  }

  const books = useBooks(userId);

  useEffect(() => {
    async function fetchUser() {
        const data = await getUser(userId);
        setProfile(data);
    }

    fetchUser();
  }, [userId]);
  useEffect(() => {
      if (profile) {
          setGoal(profile.readingGoal);
          setYear(profile.goalYear ?? new Date().getFullYear());
      }
  }, [profile]);
  
  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(signOut());
    navigate('/login');
  }

  async function saveGoal() {
    await updateGoal(
        userId,
        goal,
        year
    );

    setProfile({
        ...profile!,
        readingGoal: goal,
        goalYear: year
    });

    setIsGoalEdit(false);
}

  return (
    <>
      <section className={styles.account__header}>
        <div className={styles.account__headerContent}>
          <p>Добро пожаловать {profile?.username}!</p>
          <Button onClick={logout}>
            Выйти
          </Button>
        </div>
      </section>
      <main className={styles.container}>
        <section className={styles.account__info}>
          <img src={maleIcon} className={styles.avatar}></img>
          <div>
            <h1 className={styles.title}>Привет, {profile?.username}!</h1>
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
                    <p>Цель прочитать на {profile?.goalYear ?? 'год'}</p>
                    <p className={styles.count}>
                        {profile?.readingGoal ?? 0}
                    </p>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.content}>
          <Button onClick={() => setIsGoalEdit(!isGoalEdit)}>
            Изменить цель на год
          </Button>
          {isGoalEdit && (
            <div className={styles.inputs}>
              <Input
                  type="number"
                  value={year}
                  onChange={(e) =>
                      setYear(Number(e.target.value))
                  }
                  placeholder="Год"
              />
              <Input
                  type="number"
                  value={goal}
                  onChange={(e) =>
                      setGoal(Number(e.target.value))
                  }
                  placeholder="Количество книг"
              />
              <Button onClick={saveGoal}>
                  Сохранить
              </Button>

            </div>
          )}
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