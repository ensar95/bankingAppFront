import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FeaturesComponent } from './features/features.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { WorkOnAppComponent } from './work-on-app/work-on-app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServerComponent,
    ServersComponent,
    JumbotronComponent,
    FeaturesComponent,
    ContactInfoComponent,
    WorkOnAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
