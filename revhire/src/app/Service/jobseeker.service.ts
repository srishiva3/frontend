import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../Model/job';
import { Application } from '../Model/application';

@Injectable({
  providedIn: 'root'
})
export class JobseekerService {
  base_url = "aks-cluster-dns-pck4ar9d.hcp.eastus.azmk8s.io:4200/";
  constructor(private http: HttpClient) {   }

  public getJobsByUserId(id:Number):Observable <any>{
    
    return this.http.get<Job[]>(this.base_url+`jobs/${id}`);
    
  }
  public getAllJobs():Observable <any>{
    
    return this.http.get<Job[]>(this.base_url+`jobs`);
    
  }
  public applyForJob(application:Application):Observable <any>{
    
    return this.http.post<Application>(this.base_url+`application/create`,application);
    
  }


}
