import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BgvideoService } from '../api-services/bgvideo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router, private bgVideoService: BgvideoService) { 
    this.bgVideoService.bgvideotrueEvent();
  }

  ngOnInit(): void {
    this.bgVideoService.bgvideotrueEvent();
  }

  libraryClicked() {
    this.router.navigateByUrl('/librarybooks');
  }

  hostelManagementClicked() {
    this.router.navigateByUrl('/hostelManage');
  }

  videoLecturesClicked() {
    this.router.navigateByUrl('/tutorials');
  }
}
