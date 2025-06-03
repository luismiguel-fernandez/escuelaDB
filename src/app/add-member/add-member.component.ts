import { Component } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-add-member',
  imports: [],
  templateUrl: './add-member.component.html',
  styles: ``
})
export class AddMemberComponent {
  dpts: any[] = [];

  constructor(private datos:DatosService) {
    this.getDpts()
  }

  addMember(nombre:string,apellidos:string,email:string,telefono:string,dptid:string) {
    if (nombre.trim() 
        && apellidos.trim() 
        && email.trim() 
        && telefono.trim() 
        && dptid > "0") {
      this.datos.addMember(nombre,apellidos,email,telefono,dptid).subscribe( (res:any) => {
        if (res.error) alert("algo ha fallado y el servidor ha devuelto el siguiente error: " + res.error)
        else if (res.mensaje) alert("parece que ha ido bien y se ha añadido el nuevo miembro a la BD: " + res.mensaje)
      })
    } else {
      alert("has dejado campos sin rellenar correctamente")
    }
  }

  getDpts() {
    this.datos.getDpts().subscribe( (res:any) => {
      this.dpts = res;
    })
  }
}
