<template>
  <div class="card-container" :style="{ backgroundColor: note.color }">
    <h1>
      {{ note.date }} <span>{{ note.time }}</span>
    </h1>
    <p>
      {{ note.text }}
    </p>
    <button class="delete-btn" @click="$emit('delete-note', note)">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'NoteCard',
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  emits: ['delete-note']
};
</script>

<style scoped>
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

.delete-btn {
  margin-top: 1rem;
  background: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 0.4rem 1.1rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s;
  float: right;
}

.delete-btn:hover {
  background: #e63946;
}

@media (max-width: 768px) {
  .card-container {
    width: 100%;
  }
}
</style>