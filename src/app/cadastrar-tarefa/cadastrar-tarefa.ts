import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TarefaService, Tarefa } from '../service/tarefa';

@Component({
  selector: 'app-cadastrar-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cadastrar-tarefa.html',
  styleUrls: ['./cadastrar-tarefa.css']
})
export class CadastrarTarefa {
  novaTarefa: Tarefa = { titulo: '', prazo: '', concluida: false };

  constructor(private readonly tarefaService: TarefaService) {}

  adicionar() {
    if (this.novaTarefa.titulo.trim() && this.novaTarefa.prazo.trim()) {
      this.tarefaService.adicionar({ ...this.novaTarefa });
      this.novaTarefa = { titulo: '', prazo: '', concluida: false };
    }
  }
}
