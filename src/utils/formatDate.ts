import { format } from 'date-fns';

/**
 * Formata uma data no formato 'dd/MM/yyyy HH:mm'
 * 
 * @param timestamp data no formato de timestamp
 * @returns string formatada'
 */
export function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  return format(date, 'dd/MM/yyyy HH:mm');
}
