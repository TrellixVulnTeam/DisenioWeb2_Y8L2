import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webService : WebService) { }

  getTareas() {
    return this.webService.get('tareas');
  }

  postTareas(tarea: string, concluida: boolean, responsable: string) {
    return this.webService.post('tareas', {tarea, concluida, responsable})
  }

  updateTarea(tareaId: string, tarea: string, concluida: boolean, responsable: string) {
    return this.webService.patch(`tareas/${tareaId}`, { tarea, concluida, responsable });
  }

  deleteTarea(tareaId: string) {
    return this.webService.delete(`books/${tareaId}`);
  }

  /*

  deleteBook(bookId: string) {
    return this.webService.delete(`books/${bookId}`)
  }

  */


}
