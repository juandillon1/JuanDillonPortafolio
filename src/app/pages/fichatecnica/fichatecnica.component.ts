import { Component, OnInit } from '@angular/core';
declare function tituloproyecto();
@Component({
  selector: 'app-fichatecnica',
  templateUrl: './fichatecnica.component.html',
  styleUrls: ['./fichatecnica.component.css']
})
export class FichatecnicaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    tituloproyecto();
  }

}
