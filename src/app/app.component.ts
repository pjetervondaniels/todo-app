import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos : Todo[] = [];
  public title :  String = "Minhas Tarefas";

  constructor() {
    this.todos.push(new Todo(1, 'Run!', false));
    this.todos.push(new Todo(2, 'Go to Gym!', false));
    this.todos.push(new Todo(3, 'Buy milk!', false));
  }

  alteraTexto(){
    this.title = 'Texto alterado!';
  }
}
