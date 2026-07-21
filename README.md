# LibBooks
Web-приложение для трекинга прочитанных книг
## Стек технологий
### Frontend
- React
- TypeScript
- Vite
- SCSS Modules 
- Redux Toolkit
- Yup
- Axios
- React Hook Form
- React Router
### Backend
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT
- bcrypt

### Database

- PostgreSQL (Neon)

### 1. Клонировать репозиторий

```bash
git clone <https://github.com/cench-dev/practise-project>
```

### 2. Установить зависимости

Frontend

```bash
npm install
```

Backend

```bash
cd backend
npm install
```


### 3. Создать `.env`

Frontend

```env
VITE_API_URL=http://localhost:5000
```

Backend

```env
DATABASE_URL=
JWT_SECRET=
```


### 4. Применить миграции Prisma

```bash
npx prisma migrate deploy
```

или при локальной разработке

```bash
npx prisma migrate dev
```


### 5. Запустить backend

```bash
npm run dev
```

### 6. Запустить frontend

```bash
npm run dev
```


## UI-kit
https://www.figma.com/community/file/1227728490805632361