import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './guards/authguard/auth.guard';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "home", canActivate: [AuthGuard], loadChildren: './../student/student.module#StudentModule' },
    { path: "dashboard", canActivate: [AuthGuard], loadChildren: './../recruiter/recruiter.module#RecruiterModule' },
    { path: "**", component: NotfoundComponent }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }

export const RoutingComponents = [
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
]