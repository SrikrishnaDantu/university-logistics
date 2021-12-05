import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BgvideoService } from '../api-services/bgvideo.service';
import {HostelCallService } from '../api-services/hostel-call.service';

@Component({
  selector: 'app-add-hostel',
  templateUrl: './add-hostel.component.html',
  styleUrls: ['./add-hostel.component.css']
})
export class AddHostelComponent implements OnInit {
  
  public newHostelRoom: any;
  
  constructor(private hostelService: HostelCallService, private router: Router, private bgVideoService: BgvideoService) {
    this.newHostelRoom = {};
  }

  ngOnInit(): void {
    this.bgVideoService.bgvideofalseEvent();
  }

  addNewHostel() {
    this.newHostelRoom.status = 'available';
    this.newHostelRoom.studentId = null;
    this.newHostelRoom.toDate = null;
    this.newHostelRoom.fromDate = null;
    var base = this;
    console.log(this.newHostelRoom);
    this.hostelService.addHostelRoom(this.newHostelRoom).subscribe(data => {
      console.log(data);
      alert("Updated Successfully");
      base.router.navigateByUrl('/hostelManage');
    }, error => {
      alert('user doesnt have access');
      base.router.navigateByUrl('/hostelManage');
    });
  }
}
