import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import Books from 'src/app/models/books';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  books: Books[] = [];

  constructor(private taskService : TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

  addBook(title: string, author: string, summary: string, genre: string) {
    this.taskService.postBook(title, author, summary, genre)
    .subscribe((books: Books) => this.router.navigate(['/new-book']));
  }


}
