import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  botones1: boolean;
  botones2: boolean;
  botones3: boolean;
  botones4: boolean;
  botones5: boolean;
  botones6: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  cambiaclase(r: boolean, name: string) {
   if ( name === 'inicio') {
    this.botones1 = r;
    if ( r === this.botones1 )  {
      setTimeout(() => {
        return this.botones1 = false;
      }, 500);
    }
   }
   if ( name === 'quiensoy') {
    this.botones2 = r;
    if ( r === this.botones2 )  {
      setTimeout(() => {
        return this.botones2 = false;
      }, 500);
    }
   }
   if ( name === 'contacto') {
    this.botones5 = r;
    if ( r === this.botones5 )  {
      setTimeout(() => {
        return this.botones5 = false;
      }, 500);
    }
   }
   if ( name === 'cv') {
    this.botones6 = r;
    if ( r === this.botones6 )  {
      setTimeout(() => {
        return this.botones6 = false;
      }, 500);
    }
   }
   if ( name === 'proyectos') {
    this.botones3 = r;
    if ( r === this.botones3 )  {
      setTimeout(() => {
        return this.botones3 = false;
      }, 500);
    }
   }
  }

}
