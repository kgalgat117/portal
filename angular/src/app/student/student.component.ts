import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/shared.module';

@Component({
    selector: 'student-home',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
    constructor(private authService: AuthService) { }

    signOut() {
        this.authService.logoutUser()
    }

    ngOnInit() { }
} 