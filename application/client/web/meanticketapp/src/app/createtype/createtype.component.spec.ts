import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetypeComponent } from './createtype.component';

describe('CreatetypeComponent', () => {
  let component: CreatetypeComponent;
  let fixture: ComponentFixture<CreatetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});