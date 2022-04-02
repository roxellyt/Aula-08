import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  Materia() {
    return ['Topicos Especiais - Angular - Sexta-Feira - 19h00 as 22h30', 'Desenvolvimento para Web - Flutter - Segunda-feira - 19h00 as 22h30'];
  }

  constructor(public tasks: TasksService) { }

  ngOnInit() {
  }

}