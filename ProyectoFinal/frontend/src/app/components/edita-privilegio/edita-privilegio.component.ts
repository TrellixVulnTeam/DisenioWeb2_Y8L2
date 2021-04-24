import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Privilegios from 'src/app/models/privilegios';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edita-privilegio',
  templateUrl: './edita-privilegio.component.html',
  styleUrls: ['./edita-privilegio.component.css']
})
export class EditaPrivilegioComponent implements OnInit {
getId: any;
  constructor(private taskService: TaskService, private router: Router, private activatedRoute : ActivatedRoute) {
  this.getId = this.activatedRoute.snapshot.paramMap.get('codigo');
  }
  ngOnInit(): void {
  }

  editPrivilegios(privilegioId: string, codigo: string, adminsistema: string, adminseguridad: string, adminrest: string, admincuentas: string){
    this.taskService.patchPrivilegios(this.getId, codigo, adminsistema, adminseguridad, adminrest, admincuentas)
    .subscribe((privi: Privilegios) => this.router.navigate(['/']));
  }
}
