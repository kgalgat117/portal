import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterService } from '../services/recruiter.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class DashboardComponent implements OnInit {

  jobs: Array<Object> = []
  show: string = 'table'
  job: any = {}

  constructor(private router: Router, private recruiterService: RecruiterService) {
    this.getJobs()
  }

  viewJobsUsers(job) {
    this.job = job
    this.show = 'user'
  }

  showTable() {
    this.show = 'table'
  }

  newJobNavigate() {
    this.router.navigate(['/dashboard/new-job'])
  }

  getJobs() {
    this.recruiterService.getJobs({}).subscribe(response => {
      this.jobs = response['result']
    })
  }

  ngOnInit() {
  }

}
