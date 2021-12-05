import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AddHostelComponent } from './add-hostel/add-hostel.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { HomeComponent } from './home/home.component';
import { HostelsComponent } from './hostels/hostels.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { IssueHostelComponent } from './issue-hostel/issue-hostel.component';
import { LibraryBooksListComponent } from './library-books-list/library-books-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

const routes: Routes = [
  { path: 'addVideo', component: AddVideoComponent },
  { path: 'addHostel', component: AddHostelComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'issueHostel', component: IssueHostelComponent },
  { path: 'issuebooks', component: IssueBookComponent },
  { path: 'librarybooks', component: LibraryBooksListComponent },
  { path: 'hostelManage', component: HostelsComponent },
  { path: 'tutorials', component: TutorialsComponent},
  { path: '', component: HomeComponent , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
