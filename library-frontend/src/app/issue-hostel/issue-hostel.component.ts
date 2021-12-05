import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostelCallService } from '../api-services/hostel-call.service';
import { HostelDataService } from '../hostel-data.service';

@Component({
  selector: 'app-issue-hostel',
  templateUrl: './issue-hostel.component.html',
  styleUrls: ['./issue-hostel.component.css']
})
export class IssueHostelComponent implements OnInit {

  public hostelData:any;
  constructor(private hostelDataService: HostelDataService, private hostelCallService: HostelCallService, private router: Router) { 
    this.hostelData = {};
  }

  ngOnInit(): void {
    this.hostelData = this.hostelDataService.getHostelData();
  }

  accomodate() {
    var base = this;
    this.hostelData.status = 'alloted';
    this.hostelCallService.accomodateHostel(this.hostelData).subscribe(data => {
      console.log(data.toString());
      alert("Updated Successfully");
      base.router.navigateByUrl('/hostelManage');
    });
  }

  deaccomodate() {
    var base = this;
    this.hostelData.status = 'available';
    this.hostelData.studentId = null;
    this.hostelData.fromDate = null;
    this.hostelData.toDate = null;
    this.hostelCallService.accomodateHostel(this.hostelData).subscribe(data => {
      console.log(data.toString());
      alert("Updated Successfully");
      base.router.navigateByUrl('/hostelManage');
    });
  }

}
