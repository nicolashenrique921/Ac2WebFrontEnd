import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TarefaService, Tarefa } from '../service/tarefa';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listar-tarefa.html',
  styleUrls: ['./listar-tarefa.css']
})
export class ListarTarefas {
  constructor(private readonly tarefaService: TarefaService) {}

  get tarefas() {
    return this.tarefaService.listar();
  }

  remover(index: number) {
    this.tarefaService.remover(index);
  }

  concluir(index: number) {
    this.tarefaService.marcarConcluida(index);
  }

  get total() {
    return this.tarefas.length;
  }

  get concluidas() {
    return this.tarefas.filter(t => t.concluida).length;
  }

  get pendentes() {
    return this.tarefas.filter(t => !t.concluida).length;
  }
}
