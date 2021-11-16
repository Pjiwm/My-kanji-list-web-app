import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kanjilist.DetailComponent } from './kanjilist.detail.component';

describe('Kanjilist.DetailComponent', () => {
  let component: Kanjilist.DetailComponent;
  let fixture: ComponentFixture<Kanjilist.DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kanjilist.DetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kanjilist.DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
