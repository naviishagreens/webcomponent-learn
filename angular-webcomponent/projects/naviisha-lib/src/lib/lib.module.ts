import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCompComponent } from './basic-comp/basic-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';

@NgModule({
  declarations: [
    BasicCompComponent,
    SecondCompComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    BasicCompComponent,
    SecondCompComponent
  ]
})
export class LibModule { }
