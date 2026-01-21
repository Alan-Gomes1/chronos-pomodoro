/**
 * Calcula o próximo ciclo do cronômetro.
 *
 * Se o ciclo atual for igual a 0 ou 8, a função retorna 1, reiniciando 
 * a contagem.
 * Caso contrário, retorna o valor do ciclo atual incrementado em 1.
 *
 * @param currentCycle - O número do ciclo atual.
 * @returns O número do próximo ciclo no intervalo de 1 a 8.
 */
export function getNextCycle(currentCycle: number): number {
  return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;
}
