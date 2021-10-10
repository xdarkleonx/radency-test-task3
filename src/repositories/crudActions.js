import axios from 'axios';

const getAllNotes = async () => {
  const { data } = await axios.get('http://localhost:5000/notes');
  console.log('All notes:', data);
}

const getNoteById = async (id) => {
  const { data } = await axios.get(`http://localhost:5000/notes/${id}`);
  console.log('Note by id:', data);
}

const getStats = async () => {
  const { data } = await axios.get('http://localhost:5000/notes/stats');
  console.log('Statistic:', data);
}

const addNote = async (note) => {
  const { data } = await axios.post('http://localhost:5000/notes', note);
  console.log(data);
}

const editNote = async (id, editFields) => {
  const { data } = await axios.patch(`http://localhost:5000/notes/${id}`, editFields);
  console.log(data);
}

const removeNote = async (id) => {
  const { data } = await axios.delete(`http://localhost:5000/notes/${id}`);
  console.log(data);
}

const idForEdit = '397eff21-c8f0-4dce-9d76-39837192c3e9';
const idForRemove = '1444e9fe-a2b1-4026-a952-b253c539d765';

const newNote = {
  name: 'New note',
  category: 'Idea',
  content : 'Content of new note'
}

const editFields = {
  name: 'Edited note',
  category: 'Random Thought',
  archived: false
}

getAllNotes();
getNoteById('c825470b-e8b4-45ce-bd0d-22a43856496c');
addNote(newNote);
editNote(idForEdit, editFields);
removeNote(idForRemove);
getStats();