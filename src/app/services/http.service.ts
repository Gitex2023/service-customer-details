import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient: HttpClient) { }
  public baseUrl = 'https://us-central1-nipon-test-350808.cloudfunctions.net';
  

  public apiCall(method: string, apiEndPoint: string, payload? :{}){
    const headers: any = new HttpHeaders().set(
      'Content-Type',
      'application/json'
    );
    this.baseUrl = this.baseUrl+apiEndPoint;
     switch (method) {
      case 'post':
        return this.httpClient.post<any>(this.baseUrl,payload);
      default:
        return this.httpClient.post<any>(this.baseUrl,{})
    }
  }

}
