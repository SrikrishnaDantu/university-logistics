import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutorialCallService {
  public apiUrl = 'http://localhost:8080/api/tutorial';
  constructor(private http: HttpClient) { 

  }

  getVideos() {
    let url = this.apiUrl;
    return this.http.get(url);
  }

  addVideo(data: any) {
    let url = this.apiUrl;
    return this.http.post(url, data);
  }
  
}
