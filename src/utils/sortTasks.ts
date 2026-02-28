import type { TaskModel } from '../components/models/TaskModel';

export type SortTaskOptions = {
  tasks: TaskModel[];
  direction?: 'asc' | 'desc';
  field?: keyof TaskModel;
};

/**
 * Ordena uma lista de tarefas com base em um campo específico e direção.
 *
 * @param SortTaskOptions parâmetros de ordenação
 * @param SortTaskOptions.tasks lista de tarefas a serem ordenadas
 * @param SortTaskOptions.direction direção da ordenação ('asc' para ascendente,
 * 'desc' para descendente). Padrão é 'desc'.
 * @param SortTaskOptions.field campo do modelo TaskModel pelo qual ordenar.
 * Padrão é 'startDate'.
 * @returns lista de tarefas ordenadas
 */
export function sortTasks({
  tasks = [],
  direction = 'desc',
  field = 'startDate',
}: SortTaskOptions): TaskModel[] {
  return [...tasks].sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    if (!aValue && !bValue) return 0;
    if (!aValue) return 1;
    if (!bValue) return -1;

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return direction === 'asc' ? aValue - bValue : bValue - aValue;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return direction === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return 0;
  });
}
