import React from 'react';
import type { Task } from '../types/task';

interface TaskFormProps {
  newTask: Omit<Task, 'id'>;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (task: Omit<Task, 'id'>) => void;
}

export function TaskForm({ newTask, onSubmit, onChange }: TaskFormProps) {
  return (
    <form onSubmit={onSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 dark:text-white">Titel</label>
          <input
            type="text"
            value={newTask.title}
            onChange={(e) => onChange({ ...newTask, title: e.target.value })}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block mb-2 dark:text-white">Fälligkeitsdatum</label>
          <input
            type="date"
            value={newTask.due_date}
            onChange={(e) => onChange({ ...newTask, due_date: e.target.value })}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block mb-2 dark:text-white">Priorität</label>
          <select
            value={newTask.priority}
            onChange={(e) => onChange({ ...newTask, priority: e.target.value as Task['priority'] })}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="low">Niedrig</option>
            <option value="medium">Mittel</option>
            <option value="high">Hoch</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 dark:text-white">Beschreibung</label>
          <textarea
            value={newTask.description}
            onChange={(e) => onChange({ ...newTask, description: e.target.value })}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            rows={3}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Aufgabe hinzufügen
      </button>
    </form>
  );
}