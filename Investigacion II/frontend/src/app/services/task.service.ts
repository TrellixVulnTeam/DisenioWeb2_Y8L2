import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})


export class TaskService {

  constructor(private webService : WebService) { }

  getBusetas() {
    return this.webService.get('buseta');
  }

  // postBook(title: string, author: string, summary: string, genre: string) {
  //   return this.webService.post('books', { title, author, summary, genre });
  // }

  // updateBook(bookId: string, title: string, author: string, summary: string, genre: string) {
  //   return this.webService.patch(`books/${bookId}`, { title, author, summary, genre });
  // }

  // deleteBook(bookId: string) {
  //   return this.webService.delete(`books/${bookId}`);
  // }
  
}
