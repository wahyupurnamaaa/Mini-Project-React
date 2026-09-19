# Sanbercode Reactjs Batch 80 - Tugas React

## 📅 Deadline: 26 September 2026, 23:59 WIB

---

## 📝 Tugas 7 - React Hooks

### Deskripsi
Buat aplikasi **my-todo-app** menggunakan React Hooks untuk mengelola daftar tugas.

### Requirements
1. User dapat **menambah** todo baru
2. User dapat **menandai** todo sebagai complete/incomplete
3. User dapat **menghapus** todo
4. Tampilkan **total jumlah** todos
5. Tampilkan **total jumlah** todos yang sudah completed

### Teknologi
- React JS
- React Hooks (useState, useEffect, useReducer, dll)

### Setup Project
```bash
npx create-react-app my-todo-app
cd my-todo-app
npm start
```

### Spesifikasi Component

#### App.js (Main Component)
```jsx
import React, { useState, useReducer } from 'react';
import TodoList from './components/TodoList';

// Initial State
const initialState = {
  todos: [],
  input: ''
};

// Action Types
const ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  SET_INPUT: 'SET_INPUT'
};

// Reducer Function
function todoReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }],
        input: ''
      };
    case ACTION_TYPES.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case ACTION_TYPES.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case ACTION_TYPES.SET_INPUT:
      return { ...state, input: action.payload };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  const totalTodos = state.todos.length;
  const completedTodos = state.todos.filter(t => t.completed).length;

  const handleAddTodo = () => {
    if (state.input.trim()) {
      dispatch({ type: ACTION_TYPES.ADD_TODO, payload: state.input });
    }
  };

  return (
    <div>
      <h1>My Todo App</h1>
      <div>
        <input
          value={state.input}
          onChange={(e) => dispatch({ 
            type: ACTION_TYPES.SET_INPUT, 
            payload: e.target.value 
          })}
          placeholder="Tambah todo baru..."
        />
        <button onClick={handleAddTodo}>Tambah</button>
      </div>
      
      <TodoList 
        todos={state.todos} 
        onToggle={(id) => dispatch({ type: ACTION_TYPES.TOGGLE_TODO, payload: id })}
        onDelete={(id) => dispatch({ type: ACTION_TYPES.DELETE_TODO, payload: id })}
      />
      
      <div>
        <p>Total Todos: {totalTodos}</p>
        <p>Completed: {completedTodos}</p>
      </div>
    </div>
  );
}
```

#### TodoList.js (Component)
```jsx
import React from 'react';

export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span 
            style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
            onClick={() => onToggle(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => onDelete(todo.id)}>Hapus</button>
        </li>
      ))}
    </ul>
  );
}
```

### Struktur Direktori
```
my-todo-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js           # Main component dengan useReducer
│   ├── App.css
│   ├── index.js
│   └── components/
│       └── TodoList.js  # Todo item component
├── package.json
└── README.md
```

### Referensi
- [React Hooks Documentation](https://react.dev/reference/react)
- [useState Hook](https://react.dev/reference/react/useState)
- [useReducer Hook](https://react.dev/reference/react/useReducer)
- [useEffect Hook](https://react.dev/reference/react/useEffect)

---

## 🎨 Tugas 8 - Tailwind CSS

### Deskripsi
Buat komponen **Profile Card** yang simpel dan menarik menggunakan Tailwind CSS.

### Requirements
1. Tampilkan **avatar image**
2. Tampilkan **nama**
3. Tampilkan **bio/deskripsi**
4. Tampilkan **social media links** (minimal 3 links)

### Teknologi
- React JS (opsional) atau HTML biasa
- Tailwind CSS

### Contoh HTML dengan Tailwind CSS
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Profile Card</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center">
  
  <!-- Profile Card -->
  <div class="max-w-sm mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
    
    <!-- Header dengan Background -->
    <div class="h-24 bg-gradient-to-r from-blue-500 to-purple-600"></div>
    
    <!-- Avatar -->
    <div class="flex justify-center -mt-12">
      <img 
        class="w-32 h-32 rounded-full border-4 border-white object-cover"
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
        alt="Profile Avatar"
      />
    </div>
    
    <!-- Info -->
    <div class="text-center px-6 py-4">
      <h2 class="text-2xl font-bold text-gray-800">Nama Lengkap</h2>
      <p class="text-gray-500 mt-1">@username</p>
      <p class="text-gray-600 mt-4 leading-relaxed">
        Deskripsi singkat tentang diri Anda. Tuliskan hobi, minat, atau profession di sini.
      </p>
    </div>
    
    <!-- Social Media Links -->
    <div class="px-6 py-4">
      <div class="flex justify-center gap-4">
        <!-- GitHub -->
        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        
        <!-- LinkedIn -->
        <a href="#" class="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors">
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        
        <!-- Instagram -->
        <a href="#" class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 flex items-center justify-center transition-colors">
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </a>
        
        <!-- Twitter/X -->
        <a href="#" class="w-10 h-10 rounded-full bg-black hover:bg-gray-800 flex items-center justify-center transition-colors">
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
    </div>
    
  </div>

</body>
</html>
```

### Setup dengan React + Tailwind
```bash
# Buat project React
npx create-react-app profile-card
cd profile-card

# Install Tailwind CSS
npm install -D tailwindcss
npx tailwindcss init

# Configure tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}

# Tambahkan di src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# Jalankan
npm start
```

### Referensi
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind Cards](https://tailwindcss.com/docs/examples/cards)
- [Flexbox](https://tailwindcss.com/docs/flexbox)
- [Spacing](https://tailwindcss.com/docs/spacing)
- [Colors](https://tailwindcss.com/docs/colors)
- [Gradient](https://tailwindcss.com/docs/gradient-color-stops)
