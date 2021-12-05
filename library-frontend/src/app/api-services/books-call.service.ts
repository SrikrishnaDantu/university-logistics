import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksCallService {
  public apiUrl = 'http://localhost:8080/api/books/';
  constructor(private http: HttpClient) { }

  getBooks() {
    let url = this.apiUrl;
    return this.http.get(url);
  }

  issueBooks(data: any) {
    let url = this.apiUrl;
    url = url.concat(data.id);
    return this.http.put(url, data);
  }

  addBook(data: any) {
    let url = this.apiUrl;
    return this.http.post(url, data);
  }
}
