import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactFormsComponent } from '../contact-forms/contact-forms.component';


@NgModule({
  declarations: [ContactComponent,
  ContactFormsComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
    
  ]
})
export class ContactModule { }
