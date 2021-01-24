import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webService : WebService) { }

  getPeople() {
    return this.webService.get('people');
  }

  newPerson(id: string, name: string, username: string, email: string, address: string[], phone: string, website: string, company: string[]) {
    return this.webService.post('people', {
      id, username, email,
      address, phone, website, company
    });
  }
}
