import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-dpt',
  imports: [ NgbToast],
  templateUrl: './add-dpt.component.html',
  styles: ``
})
export class AddDptComponent {

  showToast = false;

  constructor(private datos:DatosService) {}

  addDpt(nombre:string,descr:string) {
    if (nombre.trim() && descr.trim()) {
      this.datos.insertDpt(nombre,descr).subscribe( (res:any) => {
        if (res.mensaje) {
          //mostrar un toast con ese "mensaje"
          alert(res.mensaje)
        } else if (res.error) {
          //mostrar un toast con ese "error"
          alert(res.error)
        }
      })
    }
  }
}
