import { Routes, RouterModule } from '@angular/router';
import { WorkOnAppComponent } from './work-on-app.component'
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
      path: '',
      component: WorkOnAppComponent
    }
  ];

  @NgModule({
      imports:[RouterModule.forChild(routes)],
      exports:[RouterModule]
})

export class WorkOnAppRouting{}