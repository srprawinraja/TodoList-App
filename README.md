# 📱 React Native Todo App

> Simple todo list app built with React Native & TypeScript.  
> Uses AsyncStorage for persistent storage and MVVM-inspired separation (model, view model, components, screen).

---

## 🧩 Project Structure & Explanation

### 📦 Model
#### `todo.ts`
- Defines the type alias: `Todo`.
- Fields:
  - `id`: string
  - `todoName`: string
  - `todoStatus`: boolean

#### `TodoStorage.ts`
- Exports two functions:
  - `_store_data(todoList: Todo[])`: stores todo list in AsyncStorage.
  - `_retrieveData()`: retrieves todo list from AsyncStorage.
- Stores data as JSON string (`JSON.stringify`).
- Retrieves data by parsing JSON back to objects (`JSON.parse`).
- Uses a standard key: `@TodoList`.

---

## ⚙️ View Model
#### `todoViewModel.ts`
- Uses:
  - `useState<Todo[]>([])` for todo list state.
  - `useEffect` to load stored todos on screen load.
- Exports callback functions:
  - `addTodo`: adds a new todo (uses spread operator).
  - `changeStatusTodo`: toggles todo status by id (uses `map`).
  - `deleteTodo`: deletes todo by id (uses `filter`).
- Returns:
  - `todoList`
  - `addTodo`
  - `changeStatusTodo`
  - `deleteTodo`

---

## 🧩 Components
#### `TodoComponent.tsx`
- Props:
  - `id`, `todoName`, `todoStatus`
  - `onDelete`, `onChangeStatus` callback functions.
- Renders a single todo item.
- Local state: `useState<boolean>` for todo status.
- Handles:
  - Status click → toggles local state & calls `onChangeStatus`.
  - Delete icon click → calls `onDelete` with id.

---

## 📱 Screen
#### `TodoScreen.tsx`
- Uses:
  - `todoList`, `addTodo`, `deleteTodo`, `changeStatusTodo` from `todoViewModel`.
  - Local state to handle input for new todo name.
- Renders:
  - `FlatList` to display `todoList`.
  - `TodoComponent` for each todo, with required props.

---

## 🧠 Key Points (for interview)
- AsyncStorage:
  - Only stores strings → use `JSON.stringify` / `JSON.parse`.
- Immutability:
  - Use spread operator (`...`) to add.
  - Use `map` to update.
  - Use `filter` to remove.
- React hooks:
  - `useState` for local and global state.
  - `useEffect` to load initial data.
- Clear separation:
  - Model: types & storage.
  - ViewModel: business logic.
  - Components & Screen: UI.



---

