import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallticketComponent } from './getallticket.component';

describe('GetallticketComponent', () => {
  let component: GetallticketComponent;
  let fixture: ComponentFixture<GetallticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});