import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserroleService {
  public userrole: any;
  constructor() {
    this.userrole = {};
   }
}
