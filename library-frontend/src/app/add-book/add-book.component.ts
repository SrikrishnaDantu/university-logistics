import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BgvideoService } from '../api-services/bgvideo.service';
import { BooksCallService } from '../api-services/books-call.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  public newBook: any;
  constructor(private bookService: BooksCallService, private router: Router, private bgVideoService: BgvideoService) { 
    this.newBook = {};
  }

  ngOnInit(): void {
    this.bgVideoService.bgvideofalseEvent();
  }

  addNewBook() {
    this.newBook.status = 'available';
    this.newBook.issuedtoStudent = null;
    var base = this;
    this.bookService.addBook(this.newBook).subscribe(data => {
      console.log(data.toString());
      alert("Updated Successfully");
      base.router.navigateByUrl('/librarybooks');
    }, error => {
      alert('user doesnt have access');
      base.router.navigateByUrl('/librarybooks');
    });
  }  

}
