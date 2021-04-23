import { Component, OnInit } from '@angular/core';
import Pais from 'src/app/models/paises';
import { TaskService } from '../../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pais',
  templateUrl: './edit-pais.component.html',
  styleUrls: ['./edit-pais.component.css']
})
export class EditPaisComponent implements OnInit {
    getId: any;

  constructor(private taskService : TaskService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('codigo');
  }

  ngOnInit(): void {
  }
  
  reportId() {
      console.log(this.getId);
  }

  editPais(idPais: String, codigo: string, nombre: string, bandera: string) {
    this.taskService.patchPais(this.getId, codigo, nombre, bandera)
    .subscribe((pais: Pais) => this.router.navigate(['/']));
  }

}
