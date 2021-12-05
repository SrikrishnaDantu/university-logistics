import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { BgvideoService } from '../api-services/bgvideo.service';
import { BooksCallService } from '../api-services/books-call.service';
import { DataService } from '../data.service';
import { UserroleService } from '../userrole.service';

@Component({
  selector: 'app-library-books-list',
  templateUrl: './library-books-list.component.html',
  styleUrls: ['./library-books-list.component.css']
})
export class LibraryBooksListComponent implements OnInit {
  public showVideo: boolean = false;
  public showRole: boolean = false;
  constructor(private bookService: BooksCallService, private data: DataService, private router: Router, private bgVideoService:BgvideoService, private userRole:UserroleService) {
    var base = this;
    this.usertally(); 
  }

  public rows: any = [];

  public columns = [{
    name: 'title', displayName: 'Name', sort: true, search: true, placeholder: 'Search by book title',
    columnType: '', isEdit: false, width: 'cbt5per'
  },
  {
    name: 'status', displayName: 'Status' , placeholder: 'Search by Value',
     sort: true, search: true, columnSearchValue: '', columnType: '', isEdit: false, width: 'cbt5per'
  },
  {
    name: 'author', displayName: 'Author',placeholder: 'Search by Value',
     sort: true, search: true, columnSearchValue: '', columnType: '', isEdit: false, width: 'cbt5per'
  }
  ];

  editedData(event) {
    this.data.setBooksData(event);
    this.router.navigateByUrl('/issuebooks');
  }

  deleteData(event) {
    this.data.setBooksData(event);
    this.router.navigateByUrl('/issuebooks');
  }

  ngOnInit(): void { 
    this.bgVideoService.bgvideofalseEvent();
    this.usertally();
    this.getBooksFromServices();
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

  getBooksFromServices() {
    this.bookService.getBooks().subscribe(data => {
      this.rows = data;
    }, error => {
      alert('user doesnt have access');
    });
  }

  addNewBook() {
    this.router.navigateByUrl('/addBook');
  }

}
