import { NgModule } from '@angular/core';


import { LayoutModule } from "@angular/cdk/layout";
import { ObserversModule } from "@angular/cdk/observers";

import { 
  MatToolbarModule,
  MatSelectModule
 } from "@angular/material";

const MatModules = [
  LayoutModule,
  ObserversModule,
  MatToolbarModule,
  MatSelectModule
]


@NgModule({
  imports: [ MatModules ],
  exports: [ MatModules ]
})
export class CustomMaterialModule { }
