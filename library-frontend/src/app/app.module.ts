import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LibraryBooksListComponent } from './library-books-list/library-books-list.component';
import { HomeComponent } from './home/home.component';
import { HostelsComponent } from './hostels/hostels.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { LibraryTableComponent } from './library-table/library-table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { HostelTableComponent } from './hostel-table/hostel-table.component';
import { IssueHostelComponent } from './issue-hostel/issue-hostel.component';
import { LoginComponent } from './login/login.component';
import { HttpAuthInterceptor } from './http-auth.interceptor';
import { RegisterComponent } from './register/register.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddHostelComponent } from './add-hostel/add-hostel.component';
import { VideosanitizePipe } from './videosanitize.pipe';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { AddVideoComponent } from './add-video/add-video.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryBooksListComponent,
    HostelsComponent,
    TutorialsComponent,
    LibraryTableComponent,
    IssueBookComponent,
    HostelTableComponent,
    IssueHostelComponent,
    LoginComponent,
    RegisterComponent,
    AddBookComponent,
    AddHostelComponent,
    VideosanitizePipe,
    AddVideoComponent,
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
