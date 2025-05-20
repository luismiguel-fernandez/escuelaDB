import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http:HttpClient) { }

  getDpts() {
    return this.http.get('http://localhost/escuelaDB/getDpts.php')
  }

  getDptMembers(dptName:string) {
    return this.http.get('http://localhost/escuelaDB/getMembers.php?departamento='+dptName)
  }

  
}
