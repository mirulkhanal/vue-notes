<script setup>
import { ref } from 'vue';

const notes = ref([
  {
    id: 1,
    date: '14th June, 2021',
    time: '9:45 AM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ab. Rem sequi sit reprehenderit magni illum assumenda possimus accusantium debitis.',
    color: '#fdffb6',
  },
  {
    id: 2,
    date: '15th June, 2021',
    time: '11:00 AM',
    text: 'Another note example. Vue.js is fun!',
    color: '#caffbf',
  },
  {
    id: 3,
    date: '16th June, 2021',
    time: '2:30 PM',
    text: 'This is the third note in our list.',
    color: '#9bf6ff',
  },
  {
    id: 4,
    date: '17th June, 2021',
    time: '4:00 PM',
    text: 'Adding more notes for testing the layout.',
    color: '#a0c4ff',
  },
  {
    id: 5,
    date: '18th June, 2021',
    time: '8:15 AM',
    text: 'Final sample note to fill the space.',
    color: '#ffc6ff',
  },
]);

const addNote = () => {};
const deleteNote = () => {};
const updateNOte = () => {};
</script>

<template>
  <div class="app-wrapper">
    <div class="header">
      <div class="search-container">
        <v-icon name="ri-search-line" class="search-icon" />
        <input type="text" placeholder="Search notes..." class="search-input" />
      </div>
      <button class="add-button">
        <v-icon name="ri-add-line" class="add-icon" />
        <span class="button-text">Add Note</span>
      </button>
    </div>

    <div class="container">
      <div v-for="note in notes" :key="note.id" class="card-container">
        <h1>
          {{ note.date }} <span>{{ note.time }}</span>
        </h1>
        <p>
          {{ note.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { RiSearchLine, RiAddLine } from 'oh-vue-icons/icons';

addIcons(RiSearchLine, RiAddLine);

export default {
  name: 'App',
  components: {
    'v-icon': OhVueIcon,
  },
};
</script>

<style scoped>
.app-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-container {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  width: 50%;
  transition: all 0.3s ease;
}

.search-container:focus-within {
  box-shadow: 0 0 0 2px #4a90e2;
  background-color: white;
}

.search-icon {
  margin-right: 0.5rem;
  color: #888;
  width: 18px;
  height: 18px;
}

.search-input {
  border: none;
  background: transparent;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
}

.add-button {
  display: flex;
  align-items: center;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.7rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.add-button:hover {
  background-color: #3a7bc8;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.add-button:active {
  transform: translateY(0);
}

.add-icon {
  margin-right: 0.5rem;
  width: 18px;
  height: 18px;
}

.container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  justify-content: flex-start;
}

.card-container {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  width: calc(33.333% - 1rem);
  min-width: 250px;
  flex-grow: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card-container:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.card-container h1 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.8rem;
  font-weight: 600;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.card-container h1 span {
  font-size: 0.9rem;
  color: #888;
  font-weight: normal;
  margin-left: 0.5rem;
}

.card-container p {
  color: #555;
  line-height: 1.5;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
  }

  .search-container {
    width: 100%;
  }

  .container {
    padding: 1rem;
  }

  .card-container {
    width: 100%;
  }

  .add-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
