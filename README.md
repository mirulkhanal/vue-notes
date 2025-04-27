# Vue Notes App

A simple and stylish notes application built with Vue 3 and Vite.

## Features

- **View Notes:** Displays notes in a responsive grid layout.
- **Search Notes:** Filter notes using the search bar (functionality to be implemented).
- **Add Notes:** Button to add new notes (functionality to be implemented).
- **Modern UI:** Clean interface with hover effects and animations.
- **Vector Icons:** Uses [Oh Vue Icons](https://oh-vue-icons.netlify.app/) for crisp icons.

## Tech Stack

- **Framework:** [Vue 3](https://vuejs.org/) (using Composition API with `<script setup>`)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Icons:** [Oh Vue Icons](https://oh-vue-icons.netlify.app/) (specifically Remix Icons)
- **Styling:** Scoped CSS

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (ensure Vetur is disabled)
- [Vue DevTools Plugin](https://devtools.vuejs.org/guide/installation.html) (for Vite)

## Project Setup

Make sure you have Node.js and pnpm installed.

1.  **Clone the repository (if applicable):**

    ```sh
    git clone <your-repo-url>
    cd vue-notes
    ```

2.  **Install dependencies:**
    ```sh
    pnpm install
    ```

## Development

Run the development server with hot-reloading:

```sh
pnpm dev
```

The application will typically be available at `http://localhost:5173`.

## Building for Production

Compile and minify the application for production deployment:

```sh
pnpm build
```

This will create a `dist` directory with the optimized build artifacts. You can preview the production build locally using:

```sh
pnpm preview
```
