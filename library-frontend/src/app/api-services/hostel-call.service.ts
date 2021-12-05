import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostelCallService {
  public apiUrl = 'http://localhost:8080/api/hostel/';
  constructor(private http: HttpClient) { }

  getHostels() {
    let url = this.apiUrl;
    return this.http.get(url);
  }

  accomodateHostel(data: any) {
    let url = this.apiUrl;
    url = url.concat(data.id);
    return this.http.put(url, data);
  }

  addHostelRoom(data: any) {
    let url = this.apiUrl;
    return this.http.post(url, data);
  }
}
