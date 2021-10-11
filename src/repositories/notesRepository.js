import { getInitData } from '../helpers/initData.js';
import { getDates } from '../helpers/getDates.js';
import { v4 as uuid } from 'uuid';

let notes = getInitData();

export const getNotes = (req, res) => {
  const notesList = getDates(notes);
  res.send(notesList);
}

export const getNoteById = (req, res) => {
  const { id } = req.params;
  const note = notes.find((note) => note.id === id);
  const noteWithDates = getDates([note]);
  res.send(noteWithDates);
}

export const getStats = (req, res) => {
  const summary = notes.reduce((result, item) => {
    const category = item.category;
    const activeTotal = result[category]?.active || 0;
    const activeCurrent = !item.archived ? 1 : 0;
    const archivedTotal = result[category]?.archived || 0;
    const archivedCurrent = item.archived ? 1 : 0;
    return {
      ...result,
      [category]: {
        active: activeTotal + activeCurrent,
        archived: archivedTotal + archivedCurrent
      }
    }
  }, {})

  res.send(summary);
}

export const addNote = (req, res) => {
  const note = {
    ...req.body,
    id: uuid(),
    archived: false,
    created: new Date()
  };
  notes.push(note);
  res.send(`Added: ${JSON.stringify(note)}`);
}

export const removeNoteById = (req, res) => {
  const { id } = req.params;
  notes = notes.filter((note) => note.id !== id);
  res.send(`Deleted: ${id}`);
}

export const updateNote = (req, res) => {
  const { id } = req.params;
  const { name, category, content, archived } = req.body;

  const note = notes.find((note) => note.id === id);

  if (name) note.name = name;
  if (category) note.category = req.body.category;
  if (content) note.content = req.body.content;
  if (archived) note.archived = req.body.archived;

  res.send(`Updated: ${JSON.stringify(note)}`);
}