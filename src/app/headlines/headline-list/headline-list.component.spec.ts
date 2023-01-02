import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineListComponent } from './headline-list.component';

describe('HeadlineListComponent', () => {
  let component: HeadlineListComponent;
  let fixture: ComponentFixture<HeadlineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlineListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
