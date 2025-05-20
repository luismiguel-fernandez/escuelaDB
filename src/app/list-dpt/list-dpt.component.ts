import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-dpt',
  imports: [ NgbToast ],
  templateUrl: './list-dpt.component.html',
  styles: ``
})
export class ListDptComponent {

  dpts: any[] = [];
  showToast = false;

  constructor(private datos:DatosService) {
    this.getDpts()
  }

  getDpts() {
    this.datos.getDpts().subscribe( (res:any) => {
      this.dpts = res;
      this.showToast = true;
    })
  }
}
