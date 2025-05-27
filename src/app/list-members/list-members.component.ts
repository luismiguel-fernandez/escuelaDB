import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-members',
  imports: [ FormsModule ],
  templateUrl: './list-members.component.html',
  styles: ``
})
export class ListMembersComponent {
  dpts: any[] = [];
  members: any[] = []

  constructor(private datos:DatosService) {
    this.getDpts()
  }

  getDpts() {
    this.datos.getDpts().subscribe( (res:any) => {
      this.dpts = res;
    })
  }

  getDptMembers(dptId:string) {
    if (dptId == "0")
      this.members = []
    else {
      this.datos.getDptMembers( this.getDptNameById(dptId) ).subscribe( (res:any) => {
        this.members = res
      })
    }
  }

  getDptNameById(dptId:string) {
    let dpt = this.dpts.find( d => d.DepartamentoID == dptId ) 
    if (dpt) {
      return dpt.NombreDepartamento
    } else {
      return ""
    }
  }

  updateName(newName:string) {
    //this.datos.updateName(newName)
  }
}
