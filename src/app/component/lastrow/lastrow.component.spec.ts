import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastrowComponent } from './lastrow.component';

describe('LastrowComponent', () => {
  let component: LastrowComponent;
  let fixture: ComponentFixture<LastrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
