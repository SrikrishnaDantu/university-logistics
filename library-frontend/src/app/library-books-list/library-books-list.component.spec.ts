import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryBooksListComponent } from './library-books-list.component';

describe('LibraryBooksListComponent', () => {
  let component: LibraryBooksListComponent;
  let fixture: ComponentFixture<LibraryBooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryBooksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
