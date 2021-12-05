import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BgvideoService } from '../api-services/bgvideo.service';
import { TutorialCallService } from '../api-services/tutorial-call.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  public newVideo: any;
  constructor(private tutorialService: TutorialCallService, private router: Router, private bgVideoService: BgvideoService) {
    this.newVideo = {};
  }

  ngOnInit(): void {
    this.bgVideoService.bgvideofalseEvent();
  }

  addNewVideo() {
    var base = this;
    this.tutorialService.addVideo(this.newVideo).subscribe(data => {
      console.log(data.toString());
      alert("Updated Successfully");
      base.router.navigateByUrl('/tutorials');
    }, error => {
      alert('user doesnt have access');
      base.router.navigateByUrl('/tutorials');
    });
  }

}
