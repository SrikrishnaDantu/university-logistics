import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public booksData: any;
  constructor() { }

  public getBooksData() {
    return this.booksData;
  }

  public setBooksData(data: any) {
    this.booksData = data;
  }
}
