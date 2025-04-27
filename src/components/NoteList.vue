<template>
  <div class="container" :style="containerStyle">
    <note-card
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @delete-note="$emit('delete-note', $event)" />
  </div>
</template>

<script>
import NoteCard from './NoteCard.vue';
import { UI_COLORS } from '../constants/colors';
import { computed } from 'vue';

export default {
  name: 'NoteList',
  components: {
    NoteCard,
  },
  props: {
    notes: {
      type: Array,
      required: true,
    },
  },
  emits: ['delete-note'],
  setup() {
    const containerStyle = computed(() => ({
      backgroundColor: UI_COLORS.BACKGROUND,
    }));

    return {
      containerStyle,
      UI_COLORS,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  /* background-color is now handled by :style binding */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  justify-content: flex-start;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}
</style>
