import { supabase } from '../config/supabase';
import type { Task } from '../types/task';

export const taskService = {
  async fetchTasks() {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .order('due_date', { ascending: true });

    if (error) throw error;
    return data as Task[];
  },

  async addTask(task: Omit<Task, 'id'>) {
    const { data, error } = await supabase
      .from('tasks')
      .insert([task])
      .select();

    if (error) throw error;
    return data[0] as Task;
  },

  async updateTaskStatus(id: number, status: Task['status']) {
    const { error } = await supabase
      .from('tasks')
      .update({ status })
      .eq('id', id);

    if (error) throw error;
  }
};