<script setup>
import { ref, reactive, computed } from 'vue';
import Header from './components/Header.vue';
import NoteList from './components/NoteList.vue';
import AddNoteModal from './components/AddNoteModal.vue';
import notes, {
  addNote as addNoteToStore,
  deleteNote as deleteNoteFromStore,
  updateNote as updateNoteInStore,
} from './store/notes';
import { DEFAULT_NOTE_COLOR, UI_COLORS } from './constants/colors';

const showModal = ref(false);
const searchQuery = ref('');

const newNote = reactive({
  text: '',
  color: DEFAULT_NOTE_COLOR,
});

const filteredNotes = computed(() => {
  if (!searchQuery.value) {
    return notes;
  }

  const query = searchQuery.value.toLowerCase();
  return notes.filter(
    (note) =>
      note.text.toLowerCase().includes(query) ||
      note.date.toLowerCase().includes(query)
  );
});

const handleAddNote = () => {
  addNoteToStore(newNote);

  newNote.text = '';
  newNote.color = DEFAULT_NOTE_COLOR;
  showModal.value = false;
};

const handleDeleteNote = (note) => {
  deleteNoteFromStore(note);
};

const handleSearch = (query) => {
  searchQuery.value = query;
};

const cssVars = {
  '--primary-color': UI_COLORS.PRIMARY,
  '--primary-dark-color': UI_COLORS.PRIMARY_DARK,
  '--danger-color': UI_COLORS.DANGER,
  '--danger-dark-color': UI_COLORS.DANGER_DARK,
  '--background-color': UI_COLORS.BACKGROUND,
  '--text-primary-color': UI_COLORS.TEXT_PRIMARY,
  '--text-secondary-color': UI_COLORS.TEXT_SECONDARY,
  '--text-muted-color': UI_COLORS.TEXT_MUTED,
};
</script>

<template>
  <div class="app-wrapper" :style="cssVars">
    <Header @open-modal="showModal = true" @search="handleSearch" />

    <AddNoteModal
      :show="showModal"
      :noteData="newNote"
      @close-modal="showModal = false"
      @add-note="handleAddNote" />

    <NoteList :notes="filteredNotes" @delete-note="handleDeleteNote" />
  </div>
</template>
