import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import bookRoutes from './routes/bookRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);
app.use('/users', userRoutes)

app.get('/', (_, res) => {
    res.send('backend works!');
});


export default app;