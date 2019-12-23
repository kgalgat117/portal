import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/list.component';
import { RecruiterComponent } from './recruiter.component';
import { JobFormComponent } from './job-form/job-form.component';

const routes: Routes = [
    {
        path: '', component: RecruiterComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: '/dashboard/list' },
            { path: 'list', component: DashboardComponent },
            { path: 'new-job', component: JobFormComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class recruiterRoutingModule { }

export const RecruiterRoutingComponents = [
    DashboardComponent,
    RecruiterComponent
]