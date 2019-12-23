import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/shared.module';


@Component({
    selector: 'recruiter-home',
    templateUrl: './recruiter.component.html',
    styleUrls: ['./recruiter.component.css']
})

export class RecruiterComponent implements OnInit {

    constructor(private authService: AuthService) { }

    signOut() {
        this.authService.logoutUser()
    }

    ngOnInit() { }
} 