import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos : Todo[] = [];
  public title :  String = "To do List!";
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
    this.todos.push(new Todo(1, 'Run!', false));
    this.todos.push(new Todo(2, 'Go to Gym!', false));
    this.todos.push(new Todo(3, 'Buy milk!', true));
  }

  alteraTexto(){
    this.title = 'Texto alterado!';
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo){
    todo.done = true;
  }
  
  markAsUndone(todo: Todo){
    todo.done = false;
  }
}
