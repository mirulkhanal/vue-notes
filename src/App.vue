<script setup>
import { ref, reactive } from 'vue';
import Header from './components/Header.vue';
import NoteList from './components/NoteList.vue';
import AddNoteModal from './components/AddNoteModal.vue';
import notes, {
  addNote as addNoteToStore,
  deleteNote as deleteNoteFromStore,
  updateNote as updateNoteInStore,
} from './store/notes';

const showModal = ref(false);
const newNote = reactive({
  date: '',
  time: '',
  text: '',
  color: '#fdffb6',
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
</script>

<template>
  <div class="app-wrapper">
    <Header @open-modal="showModal = true" />

    <AddNoteModal
      :show="showModal"
      :noteData="newNote"
      @close-modal="showModal = false"
      @add-note="handleAddNote" />

    <NoteList :notes="notes" @delete-note="handleDeleteNote" />
  </div>
</template>

<style>
@import './styles/global.css';
</style>
