import gravitationalBeep from '../assets/audios/gravitational_beep.mp3';

/**
 *  Carrega o som do beep gravitacional e retorna a função para reproduzi-lo.
 * @returns Função que reproduz o som do beep gravitacional.
 */
export function loadBeep(): () => void {
  const audio = new Audio(gravitationalBeep);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play();
  };
}
