import { formatDate, formatTime } from '@/utils/dateUtils';
import { reactive } from 'vue';
import { NOTE_COLORS, DEFAULT_NOTE_COLOR } from '../constants/colors';

const notes = reactive([
  {
    id: 1,
    date: '14th June, 2025',
    time: '9:45 AM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ab. Rem sequi sit reprehenderit magni illum assumenda possimus accusantium debitis.',
    color: NOTE_COLORS.YELLOW,
  },
  {
    id: 2,
    date: '15th June, 2024',
    time: '11:00 AM',
    text: 'Another note example. Vue.js is fun!',
    color: NOTE_COLORS.GREEN,
  },
  {
    id: 3,
    date: '16th June, 2023',
    time: '2:30 PM',
    text: 'This is the third note in our list.',
    color: NOTE_COLORS.BLUE,
  },
  {
    id: 4,
    date: '17th June, 2022',
    time: '4:00 PM',
    text: 'Adding more notes for testing the layout.',
    color: NOTE_COLORS.PURPLE,
  },
  {
    id: 5,
    date: '18th June, 2021',
    time: '8:15 AM',
    text: 'Final sample note to fill the space.',
    color: NOTE_COLORS.PINK,
  },
]);

export const addNote = (newNote) => {
  const id = notes.length ? Math.max(...notes.map((n) => n.id)) + 1 : 1;
  const now = new Date();

  notes.push({
    id,
    date: formatDate(now),
    time: formatTime(now),
    text: newNote.text,
    color: newNote.color || DEFAULT_NOTE_COLOR,
  });
};

export const deleteNote = (note) => {
  const index = notes.findIndex((n) => n.id === note.id);
  if (index !== -1) {
    notes.splice(index, 1);
  }
};

export const updateNote = (note) => {
  const idx = notes.findIndex((put) => put.id === note.id);
  if (idx !== -1) notes[idx] = { ...note };
};

export default notes;
