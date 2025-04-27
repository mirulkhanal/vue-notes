<template>
  <div class="header">
    <div class="search-container">
      <v-icon name="ri-search-line" class="search-icon" />
      <input 
        type="text" 
        placeholder="Search notes..." 
        class="search-input"
        v-model="searchText"
        @input="handleSearch"
        @keyup.enter="handleSearch" />
    </div>
    <button class="add-button" @click="$emit('open-modal')">
      <v-icon name="ri-add-line" class="add-icon" />
      <span class="button-text">Add Note</span>
    </button>
  </div>
</template>

<script>
import { OhVueIcon } from 'oh-vue-icons';
import { ref } from 'vue';

export default {
  name: 'Header',
  components: {
    'v-icon': OhVueIcon,
  },
  emits: ['open-modal', 'search'],
  setup(props, { emit }) {
    const searchText = ref('');
    
    const handleSearch = () => {
      emit('search', searchText.value);
    };
    
    return {
      searchText,
      handleSearch
    };
  }
};
</script>

<style scoped>
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

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
  }

  .search-container {
    width: 100%;
  }

  .add-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
