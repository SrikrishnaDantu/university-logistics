import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostelDataService {
  public hostelData: any;
  constructor() { }

  public getHostelData() {
    return this.hostelData;
  }

  public setHostelData(data: any) {
    this.hostelData = data;
  }
}
