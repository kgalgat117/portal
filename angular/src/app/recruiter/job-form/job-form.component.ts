import { Component, OnInit } from '@angular/core';
import { RecruiterService } from '../services/recruiter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {

  job: any = {
    skills: []
  }
  skill: string = ''
  jobs: Array<Object> = []

  constructor(private router: Router, private recruiterService: RecruiterService) {

  }

  addSkill() {
    if (this.skill) {
      this.job.skills.push(this.skill)
      this.skill = ''
    }
  }

  createJob() {
    if (this.validateData()) {
      this.recruiterService.newJob(this.job).subscribe(response => {
        this.router.navigate(['/dashboard'])
      }, err => {
        console.log(err)
      })
    }
  }

  validateData() {
    if (this.job.title && this.job.description && this.job.skills.length > 0) {
      return true
    }
    return false
  }

  ngOnInit() {
  }

}
