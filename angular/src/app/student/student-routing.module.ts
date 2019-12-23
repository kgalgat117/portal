import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student.component';
const routes: Routes = [
    {
        path: '', component: StudentComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: '/home/list' },
            { path: 'list', component: HomeComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule { }

export const StudentRoutingComponents = [
    HomeComponent,
    StudentComponent
]