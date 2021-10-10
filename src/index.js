import express from 'express';
import notesRoutes from './routes/notesRoutes.js';

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/notes', notesRoutes);

app.get('/', (_, res) => res.send('This is Notes API. You can get, add, update, remove and archive or unarchive notes.'));
app.all('*', (_, res) => res.send('Current route does not exist.'));

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));