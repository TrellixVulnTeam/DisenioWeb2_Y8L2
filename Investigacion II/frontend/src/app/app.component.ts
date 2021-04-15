import { Component, OnInit } from '@angular/core';
import Busetas from 'src/app/models/buseta';
import { TaskService } from '../../src/app/services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  busetas : Busetas[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    // this.taskService.getBooks()
    // .subscribe((books: Books[]) => this.dataSource = books);

    this.getBusetas();
    // Test();
  }

  getBusetas() {
    this.taskService.getBusetas()
    .subscribe((busetas : Busetas[]) => this.dataSource = busetas);
  }
}
