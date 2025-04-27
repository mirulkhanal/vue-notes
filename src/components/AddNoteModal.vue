<template>
  <transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close-modal')">
      <div class="modal-content">
        <h2>Add a New Note</h2>
        <form @submit.prevent="$emit('add-note')">
          <div class="input-group">
            <label for="note-text">Note</label>
            <textarea
              id="note-text"
              v-model="noteData.text"
              placeholder="What's on your mind?"
              required></textarea>
          </div>

          <div class="color-picker">
            <label>Color</label>
            <div class="color-options">
              <div
                v-for="color in noteColors"
                :key="color"
                class="color-option"
                :class="{ active: noteData.color === color }"
                :style="{ backgroundColor: color }"
                @click="noteData.color = color"></div>
            </div>
          </div>

          <div class="modal-actions">
            <button
              type="button"
              class="modal-cancel"
              @click="$emit('close-modal')">
              Cancel
            </button>
            <button type="submit" class="modal-add">Add Note</button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { getAllNoteColors, UI_COLORS } from '../constants/colors';

export default {
  name: 'AddNoteModal',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    noteData: {
      type: Object,
      required: true,
    },
  },
  emits: ['close-modal', 'add-note'],
  setup() {
    const noteColors = getAllNoteColors();

    return {
      noteColors,
      UI_COLORS,
    };
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 41, 59, 0.35);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: modal-blur-in 0.3s;
}

@keyframes modal-blur-in {
  from {
    backdrop-filter: blur(0px);
  }
  to {
    backdrop-filter: blur(8px);
  }
}

.modal-content {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  padding: 2rem 2.5rem;
  min-width: 480px;
  width: 50%;
  max-width: 90vw;
  animation: modal-pop-in 0.35s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transition: box-shadow 0.2s;
}

@keyframes modal-pop-in {
  0% {
    transform: scale(0.85) translateY(40px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.modal-content h2 {
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  color: #333;
  text-align: center;
  font-weight: 600;
  position: relative;
}

.modal-content h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: var(--primary-color);
  border-radius: 3px;
}

.input-group {
  margin-bottom: 1.2rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #444;
  font-size: 0.95rem;
}

.modal-content textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  background: #f8f8f8;
  font-size: 1rem;
  transition: all 0.2s ease;
  outline: none;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
  min-height: 150px; /* Increased height */
  resize: vertical;
  line-height: 1.5;
}

.modal-content textarea:focus {
  border-color: var(--primary-color);
  background: #fff;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
}

.color-picker {
  margin-bottom: 1.5rem;
}

.color-picker label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #444;
  font-size: 0.95rem;
}

.color-options {
  display: flex;
  gap: 10px;
}

.color-option {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 2px solid transparent;
}

.color-option:hover {
  transform: scale(1.1);
}

.color-option.active {
  border-color: #333;
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}

.modal-cancel,
.modal-add {
  padding: 0.7rem 1.4rem;
  border-radius: 50px;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-cancel {
  background: #f0f0f0;
  color: #555;
}

.modal-cancel:hover {
  background: #e0e0e0;
  color: #333;
}

.modal-add {
  background: var(--primary-color);
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.modal-add:hover {
  background: var(--primary-dark-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.modal-add:active {
  transform: translateY(0);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 480px) {
  .modal-content {
    padding: 1.5rem;
    min-width: unset;
    width: 90%;
  }

  .modal-actions {
    flex-direction: column;
  }

  .modal-cancel,
  .modal-add {
    width: 100%;
    text-align: center;
  }
}
</style>
