import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BgvideoService } from '../api-services/bgvideo.service';
import { BooksCallService } from '../api-services/books-call.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {

  public booksData:any;
  constructor(private bookdata: DataService, private booksService: BooksCallService, private router: Router, private bgVideoService:BgvideoService) { 
    this.booksData = {};
    this.bgVideoService.bgvideofalseEvent();
  }

  ngOnInit(): void {
    this.booksData = this.bookdata.getBooksData();
    this.bgVideoService.bgvideofalseEvent();
  }

  issue() {
    var base = this;
    this.booksData.status = 'issued';
    this.booksService.issueBooks(this.booksData).subscribe(data => {
      console.log(data.toString());
      alert("Updated Successfully");
      base.router.navigateByUrl('/librarybooks');
    }, error => {
      alert('User does not have Access');
      base.router.navigateByUrl('/librarybooks');
    });
  }

  returnBook() {
    var base = this;
    this.booksData.status = 'available';
    this.booksData.issuedtoStudent = null;
    this.booksService.issueBooks(this.booksData).subscribe(data => {
      console.log(data.toString());
      alert("Updated Successfully");
      base.router.navigateByUrl('/librarybooks');
    }, error => {
      alert('user doesnt have access');
      base.router.navigateByUrl('/librarybooks');
    });
  }
}
