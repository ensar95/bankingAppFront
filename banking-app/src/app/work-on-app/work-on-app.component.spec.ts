import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOnAppComponent } from './work-on-app.component';

describe('WorkOnAppComponent', () => {
  let component: WorkOnAppComponent;
  let fixture: ComponentFixture<WorkOnAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOnAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOnAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
