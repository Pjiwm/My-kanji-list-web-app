import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeresourceComponent } from './practiceresource.component';

describe('PracticeresourceComponent', () => {
  let component: PracticeresourceComponent;
  let fixture: ComponentFixture<PracticeresourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeresourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
