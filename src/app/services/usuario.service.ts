import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLMAILS } from '../shared/URLS';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient ) { }
  enviarMail(body){
    const URLMAIL = `${URLMAILS}/`;
    return this.http.post(URLMAIL, body);
  }
}
