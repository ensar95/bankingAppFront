import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerymoduleComponent } from './gallerymodule.component';

describe('GallerymoduleComponent', () => {
  let component: GallerymoduleComponent;
  let fixture: ComponentFixture<GallerymoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerymoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerymoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
