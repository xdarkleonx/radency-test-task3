import yup from 'yup';

const categories = ['Task', 'Random Thought', 'Idea'];

export const newNoteSchema = yup.object({
  name: yup.string().min(1).required(),
  category: yup.string().oneOf(categories).required(),
  content: yup.string().min(1).required()
})

export const editNoteSchema = yup.object({
  name: yup.string().min(1),
  category: yup.string().oneOf(categories),
  content: yup.string().min(1),
  archived: yup.boolean()
})