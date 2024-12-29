import React, { useState, useEffect } from 'react';
import { TaskForm } from '../components/TaskForm';
import { taskService } from '../services/taskService';
import type { Task } from '../types/task';

function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Omit<Task, 'id'>>({
    title: '',
    description: '',
    status: 'todo',
    priority: 'medium',
    due_date: ''
  });

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await taskService.fetchTasks();
      setTasks(data);
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await taskService.addTask(newTask);
      setNewTask({
        title: '',
        description: '',
        status: 'todo',
        priority: 'medium',
        due_date: ''
      });
      loadTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleStatusUpdate = async (id: number, status: Task['status']) => {
    try {
      await taskService.updateTaskStatus(id, status);
      loadTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Projekt Management</h2>
      
      <TaskForm 
        newTask={newTask}
        onSubmit={handleSubmit}
        onChange={setNewTask}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(['todo', 'in_progress', 'done'] as const).map(status => (
          <div key={status} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              {status === 'todo' ? 'Zu erledigen' :
               status === 'in_progress' ? 'In Bearbeitung' : 'Erledigt'}
            </h3>
            <div className="space-y-4">
              {tasks
                .filter(task => task.status === status)
                .map(task => (
                  <div key={task.id} className="border dark:border-gray-700 p-4 rounded">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold dark:text-white">{task.title}</h4>
                      <span className={`px-2 py-1 rounded text-sm ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{task.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Fällig: {new Date(task.due_date).toLocaleDateString()}
                      </span>
                      <select
                        value={task.status}
                        onChange={(e) => handleStatusUpdate(task.id, e.target.value as Task['status'])}
                        className="text-sm border dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded p-1"
                      >
                        <option value="todo">Zu erledigen</option>
                        <option value="in_progress">In Bearbeitung</option>
                        <option value="done">Erledigt</option>
                      </select>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskManager;