import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingComponents, StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    StudentRoutingComponents
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ],
  exports: [
    
  ]
})
export class StudentModule { }
