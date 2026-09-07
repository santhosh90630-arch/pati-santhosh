# 📝 To-Do List Application

A modern, feature-rich to-do list application with local storage functionality built with vanilla JavaScript, HTML, and CSS.

## ✨ Features

### Core Functionality
- ✅ **Add Tasks** - Easily add new tasks with a single click or Enter key
- ✅ **Mark Complete** - Check off completed tasks
- ✅ **Delete Tasks** - Remove individual tasks
- ✅ **Clear Completed** - Bulk delete all completed tasks
- ✅ **Local Storage** - All tasks are automatically saved to browser's local storage
- ✅ **Persistent Data** - Tasks remain even after closing the browser

### User Interface
- 🎨 **Beautiful Design** - Modern gradient background with smooth animations
- 📱 **Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🔍 **Filter Options** - View All, Active, or Completed tasks
- 📊 **Task Counter** - Displays total tasks and active task count
- 🎯 **Priority Levels** - Visual indicators for task priorities (High, Medium, Low)

## 🚀 How to Use

### Getting Started
1. Open `index.html` in your web browser
2. Enter a task in the input field
3. Click "Add Task" or press Enter
4. Check the checkbox to mark tasks as complete
5. Use the filter buttons to view different task categories

### Features in Action

**Adding a Task:**
```
1. Type your task in the input field
2. Click 'Add Task' button or press Enter
3. Task appears at the top of your list
```

**Filtering Tasks:**
- Click **All** to see all tasks
- Click **Active** to see only incomplete tasks
- Click **Completed** to see only finished tasks

**Clearing Tasks:**
- Click **Clear Completed** to remove all finished tasks at once
- Individual tasks can be deleted with the Delete button

## 💾 Local Storage

This application uses the browser's **localStorage API** to persist your tasks:

```javascript
// Tasks are automatically saved when:
- A new task is added
- A task is marked complete/incomplete
- A task is deleted

// Tasks are loaded when:
- The page is first opened
- The browser is refreshed
```

### Storage Details
- **Storage Key:** `todoList_data`
- **Format:** JSON array of todo objects
- **Capacity:** ~5-10MB (varies by browser)
- **Persistence:** Stays until manually cleared

## 🏗️ Project Structure

```
todo-app/
├── index.html      # Main HTML structure
├── styles.css      # Styling and animations
├── script.js       # Application logic
└── README.md       # This file
```

## 📋 Code Architecture

### TodoApp Class
The application uses a single `TodoApp` class that manages:

**Properties:**
- `todos` - Array of todo objects
- `currentFilter` - Active filter (all/active/completed)
- `STORAGE_KEY` - Local storage key

**Methods:**
- `init()` - Initialize the application
- `addTodo()` - Add a new task
- `toggleTodo(id)` - Mark task complete/incomplete
- `deleteTodo(id)` - Delete a task
- `clearCompleted()` - Remove all completed tasks
- `getFilteredTodos()` - Apply current filter
- `render()` - Update the UI
- `saveToStorage()` - Save todos to local storage
- `loadFromStorage()` - Load todos from local storage

## 🎨 Styling Highlights

- **Gradient Background:** Purple gradient for modern look
- **Smooth Animations:** Fade-in effects for new tasks
- **Hover Effects:** Interactive feedback on buttons and tasks
- **Custom Scrollbar:** Styled scrollbar for better UX
- **Mobile Responsive:** Adapts to small screens

## 🔧 Browser Compatibility

- ✅ Chrome/Chromium (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

**Note:** Requires JavaScript and localStorage support

## 💡 Tips & Tricks

1. **Quick Add:** Press Enter after typing to quickly add tasks
2. **Bulk Complete:** Filter by "Active" to focus on incomplete tasks
3. **Data Export:** Open DevTools Console and run:
   ```javascript
   console.log(JSON.stringify(app.todos, null, 2))
   ```
4. **Clear All Data:** In browser console:
   ```javascript
   localStorage.removeItem('todoList_data')
   location.reload()
   ```

## 🛠️ Future Enhancements

Potential features for future versions:
- Due dates for tasks
- Subtasks/nested todos
- Task categories/tags
- Dark mode toggle
- Export to CSV/PDF
- Cloud sync (Firebase/Backend)
- Drag and drop reordering
- Local search/filter

## 📝 Todo Object Structure

```javascript
{
  id: 1694000000000,              // Unique timestamp-based ID
  text: "Buy groceries",          // Task description
  completed: false,               // Completion status
  priority: "medium",             // Priority level (high/medium/low)
  createdAt: "9/6/2026"          // Creation date
}
```

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

## 📄 License

Free to use and modify for personal or educational purposes.

---

**Made with ❤️ by Pati Santhosh**

For questions or feedback, reach out at: santhosh90630@gmail.com