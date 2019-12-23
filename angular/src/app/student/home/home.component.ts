import { Component, OnInit } from '@angular/core';
import { StudentService } from './../services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs: Array<Object> = []
  user: any = {}

  constructor(private studentService: StudentService) {
    this.getJobs()
  }

  getJobs() {
    this.studentService.getJobs({}).subscribe(resp => {
      this.jobs = resp['result']
      this.user = resp['user']
    }, err => {
      console.log(err)
    })
  }

  applyJob(job, index) {
    this.studentService.jobApply({ job: job._id }).subscribe(resp => {
      this.jobs[index] = resp['result']
      console.log(resp)
    }, err => {
      console.log(err)
    })
  }

  ngOnInit() {
  }

}
