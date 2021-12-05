import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueHostelComponent } from './issue-hostel.component';

describe('IssueHostelComponent', () => {
  let component: IssueHostelComponent;
  let fixture: ComponentFixture<IssueHostelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueHostelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
