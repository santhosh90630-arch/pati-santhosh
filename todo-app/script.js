// To-Do List Application with Local Storage

class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.STORAGE_KEY = 'todoList_data';
        
        // DOM Elements
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.todoList = document.getElementById('todoList');
        this.taskCount = document.getElementById('taskCount');
        this.clearBtn = document.getElementById('clearBtn');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        
        this.init();
    }

    init() {
        // Load todos from local storage
        this.loadFromStorage();
        
        // Event listeners
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });
        this.clearBtn.addEventListener('click', () => this.clearCompleted());
        
        // Filter buttons
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.render();
            });
        });
        
        // Initial render
        this.render();
    }

    addTodo() {
        const text = this.todoInput.value.trim();
        
        if (text === '') {
            alert('Please enter a task!');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            priority: 'medium',
            createdAt: new Date().toLocaleDateString()
        };

        this.todos.unshift(todo);
        this.saveToStorage();
        this.todoInput.value = '';
        this.todoInput.focus();
        this.render();
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToStorage();
            this.render();
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.saveToStorage();
        this.render();
    }

    clearCompleted() {
        const initialCount = this.todos.length;
        this.todos = this.todos.filter(t => !t.completed);
        const deletedCount = initialCount - this.todos.length;
        
        if (deletedCount > 0) {
            this.saveToStorage();
            this.render();
            this.showNotification(`${deletedCount} completed task(s) removed`);
        }
    }

    getFilteredTodos() {
        switch(this.currentFilter) {
            case 'active':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            default:
                return this.todos;
        }
    }

    render() {
        const filteredTodos = this.getFilteredTodos();
        const activeTodos = this.todos.filter(t => !t.completed).length;
        
        // Update task count
        this.taskCount.textContent = `Tasks: ${this.todos.length} (${activeTodos} active)`;
        
        // Clear the list
        this.todoList.innerHTML = '';
        
        if (filteredTodos.length === 0) {
            this.todoList.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">🗑️</div>
                    <div class="empty-state-text">
                        ${this.currentFilter === 'all' ? 'No tasks yet. Add one to get started!' : 'No ' + this.currentFilter + ' tasks.'}
                    </div>
                </div>
            `;
            return;
        }

        // Render todos
        filteredTodos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <input 
                    type="checkbox" 
                    class="todo-checkbox" 
                    ${todo.completed ? 'checked' : ''}
                    onchange="app.toggleTodo(${todo.id})"
                >
                <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                <span class="todo-priority priority-${todo.priority}">${todo.priority}</span>
                <button class="delete-btn" onclick="app.deleteTodo(${todo.id})">Delete</button>
            `;
            this.todoList.appendChild(li);
        });
    }

    saveToStorage() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }

    loadFromStorage() {
        try {
            const saved = localStorage.getItem(this.STORAGE_KEY);
            this.todos = saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            this.todos = [];
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showNotification(message) {
        // Simple notification (you can enhance this)
        console.log(message);
    }
}

// Initialize the app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new TodoApp();
});