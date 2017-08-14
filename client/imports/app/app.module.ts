import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
    AppComponent
  ],
  providers:[{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
