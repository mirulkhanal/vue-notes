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

const showModal = ref(false);
const searchQuery = ref('');

const newNote = reactive({
  text: '',
  color: '#fdffb6',
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
  newNote.color = '#fdffb6';
  showModal.value = false;
};

const handleDeleteNote = (note) => {
  deleteNoteFromStore(note);
};

const handleSearch = (query) => {
  searchQuery.value = query;
};
</script>

<template>
  <div class="app-wrapper">
    <Header @open-modal="showModal = true" @search="handleSearch" />

    <AddNoteModal
      :show="showModal"
      :noteData="newNote"
      @close-modal="showModal = false"
      @add-note="handleAddNote" />

    <NoteList :notes="filteredNotes" @delete-note="handleDeleteNote" />
  </div>
</template>

<style>
@import './styles/global.css';
</style>
