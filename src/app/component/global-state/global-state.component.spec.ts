import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalStateComponent } from './global-state.component';

describe('GlobalStateComponent', () => {
  let component: GlobalStateComponent;
  let fixture: ComponentFixture<GlobalStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
