import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Books from 'src/app/models/books';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  getId: any;

  books: Books[] = [];

  constructor(private taskService : TaskService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

  }

  updateBook(bookId: string, title: string, author: string, summary: string, genre: string) {
    this.taskService.updateBook(this.getId, title, author, summary, genre)
    .subscribe((books: Books) => this.router.navigate(['/']));
  }

}
