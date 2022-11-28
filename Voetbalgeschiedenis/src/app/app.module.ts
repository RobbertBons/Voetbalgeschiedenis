import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
=======
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomepageComponent } from './homepage/homepage.component';
>>>>>>> Develop

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavComponent
=======
    SidebarComponent,
    HomepageComponent
>>>>>>> Develop
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
