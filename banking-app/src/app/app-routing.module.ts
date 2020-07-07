import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: '', component: MainComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallerymodule', loadChildren: () => import('./gallerymodule/gallerymodule.module').then(m => m.GallerymoduleModule) }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
