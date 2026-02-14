import type { TaskModel } from '../components/models/TaskModel';

/**
 * pega o status da tarefa
 * 
 * @param task tarefa a ser verificada
 * @param activeTask tarefa atualmente ativa
 * @returns status da tarefa
 */
export function getTaskStatus(
  task: TaskModel,
  activeTask: TaskModel | null,
): string {
  if (task.completeDate) return 'Concluída';
  if (task.interruptDate) return 'Interrompida';
  if (task.id === activeTask?.id) return 'Em andamento';
  return 'Abandonada';
}
