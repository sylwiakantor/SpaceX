import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesComponent } from './components/launches/launches.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import { LaunchesDetailsComponent } from './components/launches-details/launches-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    LaunchesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [MatDatepickerModule,
    HttpClientModule,
  {provide: MAT_DATE_LOCALE, useValue: 'pl'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
