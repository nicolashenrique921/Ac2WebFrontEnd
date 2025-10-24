import { Routes } from '@angular/router';
import { TarefaService } from './service/tarefa';
import { CadastrarTarefa } from './cadastrar-tarefa/cadastrar-tarefa';
import { ListarTarefas } from './listar-tarefa/listar-tarefa';

export const routes: Routes = [
  { path: 'Tarefa', component: TarefaService },
  { path: 'CadastrarTarefa', component: CadastrarTarefa},
  { path: 'ListarTarefas', component: ListarTarefas}
];
