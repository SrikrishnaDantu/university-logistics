import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BgvideoService {
public bgvideoSubject = new Subject<any>();
  constructor() {
   }
   bgvideotrueEvent() {
    this.bgvideoSubject.next({showVideo: true});
  }
   bgvideofalseEvent() {
    this.bgvideoSubject.next({showVideo: false});
  }
}


