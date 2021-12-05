import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BgvideoService } from '../api-services/bgvideo.service';
import { HostelCallService } from '../api-services/hostel-call.service';
import {HostelDataService } from '../hostel-data.service';
import { UserroleService } from '../userrole.service';

@Component({
  selector: 'app-hostels',
  templateUrl: './hostels.component.html',
  styleUrls: ['./hostels.component.css']
})
export class HostelsComponent implements OnInit {
  public showRole: boolean = false;

  constructor(private hostelCall: HostelCallService, private hostelData: HostelDataService , private router: Router, private bgVideoService: BgvideoService, private userRole:UserroleService) { 
    var base = this;
    this.usertally();
  }

  public rows: any = [];

  public columns = [{
    name: 'block', displayName: 'Block Name', sort: true, search: true, placeholder: 'Search by block name',
    columnType: '', isEdit: false, width: 'cbt5per'
  },
  {
    name: 'roomNo', displayName: 'Hostel No' , placeholder: 'Search by room no',
     sort: true, search: true, columnSearchValue: '', columnType: '', isEdit: false, width: 'cbt5per'
  },
  {
    name: 'status', displayName: 'Status' ,
     sort: true, search: false, columnSearchValue: '', columnType: '', isEdit: false, width: 'cbt5per'
  },
  {
    name: 'studentId', displayName: 'Student ID' ,
     sort: true, search: false, columnSearchValue: '', columnType: '', isEdit: false, width: 'cbt5per'
  },
  {
    name: 'fromDate', displayName: 'from Date' ,
     sort: true, search: false, columnSearchValue: '', columnType: '', isEdit: false, width: 'cbt5per'
  },
  {
    name: 'toDate', displayName: 'to Date' ,
     sort: true, search: false, columnSearchValue: '', columnType: '', isEdit: false, width: 'cbt5per'
  },
  {
    name: 'roomCost', displayName: 'Cost' ,
     sort: true, search: false, columnSearchValue: '', columnType: '', isEdit: false, width: 'cbt5per'
  }
  ];

 
  editedData(event) {
    this.hostelData.setHostelData(event);
    this.router.navigateByUrl('/issueHostel');
  }

  deleteData(event) {
    this.hostelData.setHostelData(event);
    this.router.navigateByUrl('/issueHostel');
  }

  ngOnInit(): void {
    this.bgVideoService.bgvideofalseEvent();
    this.getHostelService();
    this.usertally();
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

  getHostelService() {
    var base = this;
    this.hostelCall.getHostels().subscribe((data: any) => {
      base.rows = data;
      // if(Object.prototype.toString.call(data) === '[object Date]'){
      //   base.rows = new Date(data).toLocaleDateString("en-in")
      // }
    });
  }

  addHostelRoom() {
    this.router.navigateByUrl('/addHostel');
  }
}
