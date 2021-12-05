import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BgvideoService } from '../api-services/bgvideo.service';
import { TutorialCallService } from '../api-services/tutorial-call.service';
import { UserroleService } from '../userrole.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {

  public videos: any = [];
  public resultofsearch: any = [];
  public searchcourse: any;
  public showRole: boolean = false;
  constructor(private videoService: TutorialCallService, private router: Router, private bgVideoService: BgvideoService, private userRole:UserroleService) { 
    var base = this;
    this.usertally();
  }

  ngOnInit(): void {
  this.bgVideoService.bgvideofalseEvent();
   this.getVideosFromServices();
  }

  usertally(){
    var access = this.userRole.userrole;
    if(access === 'admin'){
      this.showRole = true;
    }
    else{
      this.showRole = false;
    }
  }

  getVideosFromServices() {
    var base = this;
    this.videoService.getVideos().subscribe((data:any) => {
      base.videos = data;
      base.resultofsearch = data;
    }, error => {
      alert('user doesnt have access');
    });
  }

  getVideosOnSearch() {
    this.resultofsearch = [];
    this.videos.forEach(item => {
      if (item['course'].toString().toLowerCase().indexOf(this.searchcourse.toLowerCase()) !== -1) {
        this.resultofsearch.push(item);
        console.log(this.resultofsearch);
      }
    });
  }

  addNewVideo() {
    this.router.navigateByUrl('/addVideo');
  }
}
