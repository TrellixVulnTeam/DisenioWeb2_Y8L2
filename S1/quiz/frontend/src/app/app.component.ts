import { Component, OnInit } from '@angular/core';
import Peoples from 'src/app/models/people';
import { TaskService } from 'src/app/services/task.service';
import { CommonModule } from '@angular/common';
import People from 'src/app/models/people';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {

  peoples: Peoples[] = [];

  displayedColumns: string[] = ['ID', 'Name', 'Username', 'Email',
  'Address', 'Phone', 'Website', 'Company'];

  dataSource = [];


  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.taskService.getPeople()
    .subscribe((people: People[]) => this.peoples = people);
  }

  addUser(id: string, name: string,username: string, email: string, address: string[], phone: string, website: string, company: string[]) {
    // people ; Peoples[] = [];
    this.taskService.newPerson(id, name, username, email, address, phone, website, company)
    .subscribe( (peoples: People) => this.router.navigate(['/']))
  }

}
