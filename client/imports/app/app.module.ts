import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {AppRoutingModule} from './app.routing';



import { AppComponent } from './app.component';
import { LAYOUT_DECLARATIONS } from './../layouts';
import { AUTH_DECLARATIONS } from './../auth';
import {NAV_DROPDOWN_DIRECTIVES} from './../shared/nav-dropdown.directive';
import {NAV_MENU_DIRECTIVES} from './../shared/nav-menu.directive';

import {AuthGuard} from './../auth/auth-guard.service'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    NAV_DROPDOWN_DIRECTIVES,
    NAV_MENU_DIRECTIVES,
    LAYOUT_DECLARATIONS,
  ],
  providers:[
    AuthGuard,
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
