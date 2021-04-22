import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../models/proyectos.models';
import { URLPROYECTOS, URLINFOPROYECTOS } from '../shared/URLS';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor( private http: HttpClient ) { }

  // Crear Proyecto
  crearProyecto( proyecto: Proyecto ){
    const URLPOST = `${URLPROYECTOS}/`;
    return this.http.post(URLPOST, proyecto);
  }
  obtenerProyectos(){
    const URLGET = `${URLPROYECTOS}/`;
    return this.http.get(URLGET);
  }
  // tslint:disable-next-line:ban-types
  obtenerProyecto(lenguaje: String){
    const URLGET = `${URLPROYECTOS}/lang?lang=${lenguaje}`;
    return this.http.get(URLGET);
  }
  obtenerinfoProyectos(){
    const URLGET = `${URLINFOPROYECTOS}/`;
    return this.http.get(URLGET);
  }
  borrarProyecto(id: string){
    const URLGET = `${URLPROYECTOS}/${id}`;
    return this.http.delete(URLGET);
  }
  obtenerultimoProyecto(){
    const URLGET = `${URLPROYECTOS}/ultimo`;
    return this.http.get(URLGET);
  }
  actualizarvisualizaciones(id: string){
    const URLPUT = `${URLPROYECTOS}/visualizaciones/${id}/v`;
    return this.http.put(URLPUT, {});
  }
  actualizarlikes(id: string){
    const URLPUT = `${URLPROYECTOS}/visualizaciones/${id}/l`;
    return this.http.put(URLPUT, {});
  }
}
