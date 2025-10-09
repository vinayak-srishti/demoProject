import express from 'express';
import cors from 'cors';
import './config/database.js';
import router from './router.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/demo',router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
