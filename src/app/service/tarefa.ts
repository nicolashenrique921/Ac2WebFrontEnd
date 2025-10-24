import { Injectable } from '@angular/core';

export interface Tarefa {
  titulo: string;
  prazo: string;
  concluida: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefa[] = [];

  listar(): Tarefa[] {
    return this.tarefas;
  }

  adicionar(tarefa: Tarefa) {
    this.tarefas.push(tarefa);
  }

  remover(index: number) {
    this.tarefas.splice(index, 1);
  }

  marcarConcluida(index: number) {
    this.tarefas[index].concluida = true;
  }
}
