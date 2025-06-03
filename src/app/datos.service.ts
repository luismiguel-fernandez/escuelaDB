import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http:HttpClient) { }
  private urlMembers = 'http://localhost/escuelaDB/getMembers.php?departamento='

  addMember(n:string,a:string,e:string,t:string,d:string) {
    let params = {
      nombre: n,
      apellido: a,
      email: e,
      telefono: t,
      departamento_id: d
    }
    return this.http.post('http://localhost/escuelaDB/insertMember.php',params)
  }

  getDpts() {
    return this.http.get('http://localhost/escuelaDB/getDpts.php')
  }

  getDptMembers(dptName:string) {
    return this.http.get(this.urlMembers + dptName)
  }

  insertDpt(nombre:string,descr:string) {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // })
    let params = {
      nombre_departamento: nombre,
      descripcion: descr
    }
    // return this.http.post('http://localhost/escuelaDB/insertDpt.php',params, {headers})
    return this.http.post('http://localhost/escuelaDB/insertDpt.php',params)
  }
  
}
