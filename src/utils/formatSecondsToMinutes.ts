/**
 * Formata os segundos em uma string no formato "MM:SS".
 * @param seconds - O número de segundos a ser formatado.
 * @returns String formatada.
 */
export function formatSecondsToMinutes(seconds: number): string {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsRemaining = String(seconds % 60).padStart(2, '0');
  return `${minutes}:${secondsRemaining}`;
}
