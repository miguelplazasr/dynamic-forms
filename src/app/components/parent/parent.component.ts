import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from "@angular/material";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  selectedValue: string = 'inicial';

  countries = [
    { code: "ARG", value: "Argentina"},
    { code: "BRA", value: "Brasil"},
    { code: "COL", value: "Colombia"}
  ]

  constructor() { }



  cambio(event: MatSelectChange, state: any){
    if(event['isUserInput']){
      this.selectedValue = event.source.value;
    }
  }

}
