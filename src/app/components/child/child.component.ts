import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() country: string;

  countrySelected: string;

  tabs = [
    { 
      country: 'COL',
      tabs: [
        {name: 'tab01'},
        {name: 'tab02'},
        {name: 'tab03'},
      ]
  }
  ];

  ngOnChanges(changes: {[propKey: string]: SimpleChange}){

    this.countrySelected = changes.country.currentValue;

  }

}
