import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GallerymoduleComponent } from './gallerymodule.component';

const routes: Routes = [{ path: 'gallery', component: GallerymoduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GallerymoduleRoutingModule { }
