import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import Books from 'src/app/models/books';
import { TaskService } from '../../src/app/services/task.service';
import { ViewChildren, QueryList, ElementRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

declare const Test: any;


interface Actions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  books: Books[] = [];

  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;

  title = 'frontend';

  displayedColumns: string[] = ['checkbox', 'id' ,'title', 'author', 'summary', 'genre', 'action'];
  dataSource = [];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.taskService.getBooks()
    .subscribe((books: Books[]) => this.dataSource = books);

    Test();
  }

  actions: Actions[] = [
    {value: 'edit-0', viewValue: 'Editar'},
    {value: 'delete-1', viewValue: 'Eliminar'}
  ];

  disableSelect = new FormControl(false);

  deleteBook(id) {
    console.log(id);
    if (window.confirm('Desea eliminar el libro?')) {
      this.taskService.deleteBook(id)
      .subscribe((books: Books) =>{
        this.books.filter(t => t._id != books._id)
      });
    }
  }
}
