import { Component, OnInit } from '@angular/core';
import { AuthService } from './api-services/auth.service';
import { BgvideoService } from './api-services/bgvideo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public showLogin: boolean = true;
  public showVideo: boolean = true; 
  title = 'library-frontend';

  constructor(private authService: AuthService, private bgVideoService: BgvideoService){
    var base = this;
    this.authService.loginSubject.subscribe((data: any) => {
      debugger;
      if(data.login) {
        base.showLogin = false;
      }
    });
    this.bgVideoService.bgvideoSubject.subscribe((data: any) => {
      debugger;
       base.showVideo = data.showVideo;
    });
  }
  ngOnInit(): void {
    // this.bgVideoService.bgvideotrueEvent();
    var token = sessionStorage.getItem('authToken');

    if (token != null && token != '' && token != undefined) {
      this.showLogin = false;
    }
  }
  logout() {
    sessionStorage.clear();
    this.showLogin = true;
    this.bgVideoService.bgvideotrueEvent();
  }
}
