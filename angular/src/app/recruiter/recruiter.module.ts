import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { recruiterRoutingModule, RecruiterRoutingComponents } from './recruiter-routing.module';
import { SharedModule } from '../shared/shared.module';
import { JobFormComponent } from './job-form/job-form.component';


@NgModule({
  declarations: [
    RecruiterRoutingComponents,
    JobFormComponent
  ],
  imports: [
    CommonModule,
    recruiterRoutingModule,
    SharedModule
  ]
})
export class RecruiterModule { }
