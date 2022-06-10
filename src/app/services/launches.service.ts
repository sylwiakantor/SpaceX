import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { launchAPI, launchesAPI, launchpadsAPI, rocketsAPI } from 'src/environments/environment';
import { Launch } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})

export class LaunchesService {

  constructor(private http: HttpClient) { }

  getLaunches(params: any, query?: any): Observable<any> {
    return this.http.post<any>(`${launchesAPI}`, {options: params, query: query});
  }

  getLaunch(launchId: string): Observable<Launch> {
    return this.http.get<Launch>(`${launchAPI}/${launchId}`);
  }

  getRocket(rocketId: string): Observable<any> {
    return this.http.get<any>(`${rocketsAPI}/${rocketId}`);
  }

  getLaunchpad(launchpadId: string): Observable<any> {
    return this.http.get<any>(`${launchpadsAPI}/${launchpadId}`);
  }
}
