import type { TaskModel } from '../components/models/TaskModel';

/**
 * Determina o próximo tipo de ciclo com base no ciclo atual.
 *
 * Regras:
 * - Retorna um 'longBreakTime' a cada 8 ciclos.
 * - Retorna um 'shortBreakTime' a cada 2 ciclos pares.
 * - Retorna um 'workTime' a cada 2 ciclos ímpares.
 *
 * @param currentCycle - Número do ciclo atual.
 * @returns O próximo tipo de ciclo..
 */
export function getNextCycleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle % 8 === 0) return 'longBreakTime';
  if (currentCycle % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}
