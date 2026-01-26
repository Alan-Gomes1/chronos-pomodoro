import type { TaskStateModel } from "../components/models/TaskStateModel";

let instance: TimerWorkerManager | null = null;

/**
 * Classe responsável por gerenciar um Web Worker para operações de temporização.
 * Implementa o padrão singleton para garantir que apenas uma instância do worker
 * seja criada durante o ciclo de vida da aplicação.
 */
export class TimerWorkerManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL('./timerWorker.js', import.meta.url));
  }

  /**
   * Retorna a instância única (singleton) da classe TimerWorkerManager.
   */
  static getInstance(): TimerWorkerManager {
    if (!instance) {
      instance = new TimerWorkerManager();
    }
    return instance;
  }

  /**
   * Envia uma mensagem para o worker.
   * @param message A mensagem a ser enviada para o worker.
   */
  postMessage(message: TaskStateModel): void {
    this.worker.postMessage(message);
  }

  /**
   * Define o callback para o evento de mensagem do worker.
   * @param cb A função callback que será chamada quando o worker enviar
   * uma mensagem.
   */
  onmessage(cb: (e: MessageEvent) => void): void {
    this.worker.onmessage = cb;
  }

  /**
   * Termina a execução do worker.
   */
  terminate(): void {
    this.worker.terminate();
    instance = null;
  }
}
