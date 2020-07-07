import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GallerymoduleRoutingModule } from './gallerymodule-routing.module';
import { GallerymoduleComponent } from './gallerymodule.component';
import { GalleryComponent } from '../gallery/gallery.component'

@NgModule({
  declarations: [GallerymoduleComponent,
  GalleryComponent
  ],
  imports: [
    CommonModule,
    GallerymoduleRoutingModule
  ]
})
export class GallerymoduleModule { }
