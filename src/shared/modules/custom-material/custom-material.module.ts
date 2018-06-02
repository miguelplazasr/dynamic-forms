import { NgModule } from '@angular/core';


import { LayoutModule } from "@angular/cdk/layout";
import { ObserversModule } from "@angular/cdk/observers";

import { 
  MatToolbarModule,
  MatSelectModule,
  MatTabsModule
 } from "@angular/material";

const MatModules = [
  LayoutModule,
  ObserversModule,
  MatToolbarModule,
  MatSelectModule,
  MatTabsModule
]


@NgModule({
  imports: [ MatModules ],
  exports: [ MatModules ]
})
export class CustomMaterialModule { }
