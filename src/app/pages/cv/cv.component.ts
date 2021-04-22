import { Component, OnInit } from '@angular/core';
import { datos } from './ChartData';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
  datos: any[];
  view: any[] = [750, 550];
  showLegend = true;
  showLabels = true;
  colorScheme = {
    domain: ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', '#cb997e', "#ddbea9", "#ffe8d6", "b7b7a4"]
  };
  constructor() {
    Object.assign(this, { datos });
   }

  ngOnInit(): void {
  }
  onSelect(event) {
    console.log(event);
  }


}
