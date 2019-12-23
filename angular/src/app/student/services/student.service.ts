import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Secret } from 'src/app/shared/shared.module';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient, private secret: Secret) { }

  url = this.secret.DOMAIN_NAME + 'recruiter/'

  jobApply(params) {
    return this.http.get(this.url + 'job/apply', { params: params })
  }

  getJobs(params) {
    return this.http.get(this.url + 'job', { params: params })
  }

}
