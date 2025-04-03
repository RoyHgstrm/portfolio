"use client";

import { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaCheck, FaEdit, FaSave } from "react-icons/fa";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem("portfolioTodos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("portfolioTodos", JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo: TodoItem = {
        id: Date.now().toString(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  // Toggle todo completion status
  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Start editing a todo
  const startEdit = (todo: TodoItem) => {
    setEditId(todo.id);
    setEditValue(todo.text);
  };

  // Save edited todo
  const saveEdit = () => {
    if (editId && editValue.trim() !== "") {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: editValue } : todo
        )
      );
      setEditId(null);
    }
  };

  // Handle Enter key press in input field
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (editId) {
        saveEdit();
      } else {
        handleAddTodo();
      }
    }
  };

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Get completion percentage
  const getCompletionPercentage = () => {
    if (todos.length === 0) return 0;
    return Math.round((todos.filter(todo => todo.completed).length / todos.length) * 100);
  };
  
  return (
    <div className="modern-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden animated-border">
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Task Manager
        </h3>
        
        {/* Todo input */}
        <div className="flex mb-6">
          <input
            type="text"
            className="flex-grow p-3 bg-gray-50 dark:bg-gray-700 rounded-l-xl border-0 focus:ring-2 focus:ring-blue-500 outline-none todo-input shadow-inner"
            placeholder="Add a new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            aria-label="New task input"
          />
          <button
            onClick={handleAddTodo}
            className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-r-xl transition-colors flex items-center justify-center todo-add-button todo-button shadow-md"
            aria-label="Add task"
          >
            <FaPlus />
          </button>
        </div>

        {/* Todo list */}
        <ul className="divide-y divide-gray-100 dark:divide-gray-700 max-h-80 overflow-y-auto pr-1" aria-label="Task list">
          {todos.length === 0 ? (
            <li className="py-6 text-center text-gray-500 flex flex-col items-center justify-center">
              <div className="text-6xl mb-4 text-gray-300 dark:text-gray-600">📝</div>
              No tasks yet. Add one above!
            </li>
          ) : (
            todos.map((todo) => (
              <li
                key={todo.id}
                className={`py-4 px-3 flex items-center group animate-fade-in rounded-lg todo-item ${todo.completed ? 'completed bg-gray-50 dark:bg-gray-900/30' : 'hover:bg-gray-50 dark:hover:bg-gray-700/30'} transition-all duration-200`}
              >
                {editId === todo.id ? (
                  /* Edit mode */
                  <div className="flex w-full">
                    <input
                      type="text"
                      className="flex-grow p-2 bg-gray-50 dark:bg-gray-700 rounded-l-lg border-0 focus:ring-2 focus:ring-blue-500 outline-none todo-input shadow-inner"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      autoFocus
                      aria-label="Edit task"
                    />
                    <button
                      onClick={saveEdit}
                      className="p-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-r-lg transition-colors todo-button shadow-md"
                      aria-label="Save changes"
                    >
                      <FaSave />
                    </button>
                  </div>
                ) : (
                  /* View mode */
                  <>
                    <button
                      onClick={() => toggleComplete(todo.id)}
                      className={`todo-checkbox ${
                        todo.completed ? "bg-green-500 border-green-500" : "border-gray-300 dark:border-gray-600"
                      } mr-3 todo-action shadow-sm`}
                      aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
                      aria-checked={todo.completed}
                      role="checkbox"
                    >
                      {todo.completed && <FaCheck className="text-white text-xs" />}
                    </button>
                    <span
                      className={`flex-grow ${
                        todo.completed
                          ? "line-through text-gray-400"
                          : "text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      {todo.text}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => startEdit(todo)}
                        className="text-blue-500 hover:text-blue-600 p-1 todo-action-button todo-action bg-blue-100 dark:bg-blue-900/30 rounded-full"
                        aria-label="Edit task"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="text-red-500 hover:text-red-600 p-1 todo-action-button todo-action bg-red-100 dark:bg-red-900/30 rounded-full"
                        aria-label="Delete task"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))
          )}
        </ul>
        
        {/* Task stats and actions */}
        {todos.length > 0 && (
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>
                {todos.filter(todo => todo.completed).length} of {todos.length} tasks completed
              </p>
              {todos.some(todo => todo.completed) && (
                <button 
                  onClick={clearCompleted}
                  className="text-red-400 hover:text-red-500 text-xs py-1 px-3 rounded-full border border-red-200 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-900/20 transition-colors todo-action shadow-sm"
                  aria-label="Clear completed tasks"
                >
                  Clear completed
                </button>
              )}
            </div>
            
            <div className="todo-progress bg-gray-100 dark:bg-gray-700 shadow-inner">
              <div 
                className="todo-progress-bar"
                style={{ width: `${getCompletionPercentage()}%` }}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={getCompletionPercentage()}
                role="progressbar"
                aria-label="Task completion progress"
              ></div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-gray-50 dark:bg-gray-900/30 py-3 px-6 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 text-center">
        Tasks are saved in your browser's local storage
      </div>
    </div>
  );
} 